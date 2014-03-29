Player = require './Player.coffee'
Game = require './Game.coffee'
app = (require 'express')()
server = (require 'http').createServer app

io = (require 'socket.io').listen server

server.listen 4242

app.get '/', (req, res) ->
    res.sendfile(__dirname + '/index.html')

# instantiate a new game
game = new Game
game.eventEmitter.on 'game stop', (e) ->
    # Intercepts game 'game stop' event and broadcast it to all clients
    io.sockets.emit 'game stop'

# Handle player connection and disconnection
# When the required number of players have joined, start the game
io.sockets.on 'connection', (socket) ->
    player = new Player(socket.id)

    if game.acceptsPlayer()
        game.addPlayer(player)
    else
        socket.emit 'game full'

    # Start the game when the required number of players have joined
    if game.isReady()
        console.log('start')
        game.start()

    # Send joining information to all players
    socket.emit 'welcome', player.id
    io.sockets.emit 'new Player', player.id

    # Handle disconnection
    socket.on 'disconnect', () ->
        player.sayGoodbye()
        game.removePlayer(player)
