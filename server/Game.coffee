# Implementation of the Game logic: add/remove players, decide who won,
# assess if the Game can accept more players or not, add characters to
# the board, etc.

require './toolbox.coffee'
CharacterFhacktory = require './Character.coffee'
EventEmitter = (require 'events').EventEmitter


class Game
    @MAX_GAME_TIME = 30000  # a game lasts for 30s
    @MAX_PLAYERS: 5

    constructor: ()->
        @playerList = []
        @eventEmitter = new EventEmitter()
        @characterFhacktory = new CharacterFhacktory()  # wink wink

    addPlayer: (player) ->
        # add player to the Game and update its position
        player.position = @playerList.length + 1
        @playerList.push player

    removePlayer: (player) ->
        # remove a player from the Game and remove the position of the
        # remaning players
        @playerList.remove player

        position = 1
        for player in @playerList
            player.position = position
            position += 1

    acceptsPlayer: ->
        # Return true if the Game can accept more players
        return @playerList.length < Game.MAX_PLAYERS

    isReady: ->
        # return true if the Game has the maximum number of players
        return @playerList.length == Game.MAX_PLAYERS

    start: ->
        # Spawn a character at a random X position, at the top of the screen
        # at random time intervals
        _this = this

        characterList = []
        timeoutStep = 333  # in ms
        steps = 0
        interval = setInterval(
            () ->
                if steps > Game.MAX_GAME_TIME / timeoutStep
                    _this.eventEmitter.emit 'game stop'
                    clearInterval(interval)
                    return

                character = _this.spawnCharacter()
                setTimeout(
                    () ->
                        characterList.push character
                        _this.eventEmitter.emit('character spawned', character)
                    Math.floor(Math.random() * 3000)
                )
                steps += 1
            timeoutStep
        )

    spawnCharacter: () ->
        # Spawn a random character at a random horizontal position
        startX = Math.random()
        return this.characterFhacktory.newRandomCharacter(startX)

    comparePlayers: (p1, p2) ->
        # function used to sort the players from by score
        if p1.score < p2.score
            return 1
        else if p1.score > p2.score
            return -1
        else
            return 0

    getWinners: () ->
        # return the players, sorted by descending score
        return @playerList.sort(this.comparePlayers)


module.exports = Game
