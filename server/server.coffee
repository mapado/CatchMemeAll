#require 'coffee-script/register'
Player = require './Player.coffee'
Game = require './Game.coffee'
app = (require 'express')()
server = (require 'http').createServer app

io = (require 'socket.io').listen server

server.listen 4242



app.get '/', (req, res) ->
    res.sendfile(__dirname + '/index.html')

game = new Game

io.sockets.on 'connection', (socket) ->
    player = new Player(socket.id)

    if game.acceptsPlayer()
        game.addPlayer(player)
    else
        socket.emit 'game full'

    if game.isReady()
        console.log('start')
        game.start()

    socket.emit 'welcome', player.id
    io.sockets.emit 'new Player', player.id


    #socket.on 'my other event', (data) ->
    #    console.log(data)

    socket.on 'disconnect', () ->
        player.sayGoodbye()
        game.removePlayer(player)
