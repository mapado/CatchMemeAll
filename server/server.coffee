require './toolbox.js'
app = (require 'express')()
server = (require 'http').createServer app

io = (require 'socket.io').listen server

server.listen 4242



class User
    constructor: (@id)->

    sayHello: ->
        console.log 'Hello from ' + @id

    sayGoodbye: ->
        console.log 'Goodbye from ' + @id

app.get '/', (req, res) ->
    res.sendfile(__dirname + '/index.html')

clients = []

io.sockets.on 'connection', (socket) ->
    user = new User(socket.id)
    user.sayHello()
    clients.push user


    socket.emit 'welcome', user.id

    io.sockets.emit 'new user', user.id


    #socket.on 'my other event', (data) ->
    #    console.log(data)

    socket.on 'disconnect', () ->
        user.sayGoodbye()
        clients.remove user
