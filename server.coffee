Player = require './server/Player.coffee'
Game = require './server/Game.coffee'
express = require 'express'
app = express()
http = require 'http'
server = http.createServer app
io = (require 'socket.io').listen server

server.listen 4242

# Serve  the client code
app.use('/assets', express.static(__dirname + '/client/dist/assets'))
app.get '/', (req, res) ->
    res.sendfile(__dirname + '/client/index.html')

# instantiate a new game
game = new Game

# Intercepts game 'game stop' event and broadcast it to all clients,
# with the identity of the winner(s)
game.eventEmitter.on 'game stop', (e) ->
    winners = game.getWinners()
    io.sockets.emit('game stop', winners)

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
    player.sayHello()
    socket.emit 'welcome', player
    io.sockets.emit 'new player', player

    # Handle disconnection
    socket.on 'disconnect', () ->
        player.sayGoodbye()
        game.removePlayer(player)

    socket.on 'logged in', (name, isTwitter) ->
        player.name = name
        io.sockets.emit('player updated', player)

        # if user is a twitter account, let's fetch his avatar
        if isTwitter
            http.get(
                {
                    host: 'vader.mapado.com'
                    port: 8888,
                    path: '/twitter/avatar/' + player.name
                }
                (res) ->
                    res.on 'data', (chunk) ->
                        data = JSON.parse(chunk)
                        if data.avatar
                            player.avatar = data.avatar
                            io.sockets.emit('player updated', player)
            )

    # Update the player score and broadcast its new score to all clients
    socket.on 'update score', (score) ->
        player.score = score
        io.sockets.emit('score updated', player)

    # Add a wall and broadcast it to all players
    socket.on 'add wall', (ax, ay, cx, cy) ->
        io.sockets.emit('wall added', player, ax, ay, cx, cy)

    # Remove a wall and broadcast it to all players
    socket.on 'remove wall', (ax, ay, cx, cy) ->
        io.sockets.emit('wall removed', player, ax, ay, cx, cy)
