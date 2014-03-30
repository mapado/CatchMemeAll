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
    res.sendfile(__dirname + '/client/home.html')

app.get '/play', (req, res) ->
    res.sendfile(__dirname + '/client/play.html')

# instantiate a new game
game = new Game

# Intercepts game 'game stop' event and broadcast it to all clients,
# with the identity of the winner(s)
game.eventEmitter.on 'game stop', (e) ->
    console.log('GAME STOP')
    winners = game.getWinners()
    game = new Game
    io.sockets.emit('game stop', winners)

# Send the position of a newly spawed character to all clients
game.eventEmitter.on 'character spawned', (character) ->
    io.sockets.emit('character spawned', character)

# Handle player connection and disconnection
# When the required number of players have joined, start the game
io.sockets.on 'connection', (socket) ->
    player = new Player(socket.id)

    # Send joining information to all players
    player.sayHello()
    socket.emit 'welcome', player
    socket.emit 'player list', game.playerList

    # Handle disconnection
    socket.on 'disconnect', () ->
        game.removePlayer(player)
        io.sockets.emit 'player list', game.playerList

    # fetch the player's avatar given its username
    socket.on 'logged in', (data) ->
        player.name = data.name
        console.log('user ' + player.name + ' is logged')

        # if user is a twitter account, let's fetch his avatar
        if data.isTwitter
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

        if game.acceptsPlayer()
            game.addPlayer(player)
        else
            socket.emit 'game full'

        setTimeout(
            () ->
                io.sockets.emit 'new player', player
            500
        )

        # Start the game when the required number of players have joined
        if game.isReady()
            io.sockets.emit 'game countdown', game
            setTimeout(
                () ->
                    io.sockets.emit 'game start', game
                    game.start()
                7000
            )


    # Update the player score and broadcast its new score to all clients
    socket.on 'update score', (score) ->
        player.score = score
        io.sockets.emit('score updated', player)

    # Add a wall and broadcast it to all players
    socket.on 'add bubble', (x, y) ->
        io.sockets.emit('bubble added', player, x, y)

    # Remove a wall and broadcast it to all players
    socket.on 'remove bubble', (x, y) ->
        io.sockets.emit('bubble removed', player, x, y)
