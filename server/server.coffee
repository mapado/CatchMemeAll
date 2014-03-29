#require 'coffee-script/register'
User = require './User.coffee'
Game = require './Game.coffee'
app = (require 'express')()
server = (require 'http').createServer app

io = (require 'socket.io').listen server

server.listen 4242



app.get '/', (req, res) ->
    res.sendfile(__dirname + '/index.html')

game = new Game

io.sockets.on 'connection', (socket) ->
    user = new User(socket.id)

    if game.acceptsPlayer()
        game.addPlayer(user)
    else
        socket.emit 'game full'

    if game.isReady()
        console.log('start')
        game.start()

    socket.emit 'welcome', user.id
    io.sockets.emit 'new user', user.id


    #socket.on 'my other event', (data) ->
    #    console.log(data)

    socket.on 'disconnect', () ->
        user.sayGoodbye()
        game.removePlayer(user)
