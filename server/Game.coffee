require './toolbox.coffee'
CharacterFhacktory = require './Character.coffee'
EventEmitter = (require 'events').EventEmitter


class Game
    @MAX_PLAYERS: 5 # 5
    @NB_CHARACTERS_PER_PLAYER: 5 # 20
    @MAX_GAME_TIME = 5000

    constructor: ()->
        @playerList = []
        @eventEmitter = new EventEmitter()
        @characterFhacktory = new CharacterFhacktory()

    addPlayer: (player) ->
        player.position = @playerList.length + 1
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

    comparePlayers: (p1, p2) ->
        if p1.score < p2.score
            return 1
        else if p1.score > p2.score
            return -1
        else
            return 0

    getWinners: () ->
        return @playerList.sort(this.comparePlayers)



module.exports = Game
