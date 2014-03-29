require './toolbox.coffee'
CharacterFhacktory = require './Character.coffee'
EventEmitter = (require 'events').EventEmitter


class Game
    @MAX_PLAYERS: 2 # 5
    @NB_CHARACTERS_PER_PLAYER: 5 # 20
    @MAX_GAME_TIME = 5000

    constructor: ()->
        @playerList = []
        @eventEmitter = new EventEmitter()
        @characterFhacktory = new CharacterFhacktory()

    addPlayer: (player) ->
        @playerList.push player

    removePlayer: (player) ->
        @playerList.remove player

    acceptsPlayer: ->
        return @playerList.length < Game.MAX_PLAYERS

    isReady: ->
        return @playerList.length == Game.MAX_PLAYERS

    start: ->
        # Spawn a character at a random X position, at the top of the screen
        # at random time intervals (bewteen 333ms and 3.333s)
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
        startX = Math.random()
        return this.characterFhacktory.newRandomCharacter(startX)

    getWinners: () ->
        max = 0
        winners = []
        for player in @playerList
            if player.score == max
                winners.push player
            else if player.score > max
                winners = []
                winners.push player
        return winners

module.exports = Game
