Player = require './Player.coffee'
Game = require './Game.coffee'
app = (require 'express')()
server = (require 'http').createServer app
io = (require 'socket.io').listen server

server.listen 4242

# Serve  the client code
app.get '/', (req, res) ->
    res.sendfile(__dirname + '/index.html')

# instantiate a new game
game = new Game

# Intercepts game 'game stop' event and broadcast it to all clients
game.eventEmitter.on 'game stop', (e) ->
    io.sockets.emit 'game stop'

# Send the position of a newly spawed character to all clients
game.eventEmitter.on 'character spawned', (character) ->
    io.sockets.emit('character spawned', character)

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
        io.sockets.emit 'game start'
        game.start()

    # Send joining information to all players
    socket.emit 'welcome', player
    io.sockets.emit 'new player', player

    # Handle disconnection
    socket.on 'disconnect', () ->
        player.sayGoodbye()
        game.removePlayer(player)

    # Update the player score and broadcast its new score to all clients
    socket.on 'update score', (score) ->
        player.score = score
        io.sockets.emit('score updated', player)
