require './toolbox.coffee'
Character = require './Character.coffee'

class Game
    @MAX_PLAYERS: 2 # 5
    @NB_CHARACTERS_PER_PLAYER: 20
    @NB_CHARACTERS = @MAX_PLAYERS * @NB_CHARACTERS_PER_PLAYER

    constructor: ()->
        @playerList = []

    addPlayer: (player) ->
        @playerList.push player

    removePlayer: (player) ->
        @playerList.remove player

    acceptsPlayer: ->
        return @playerList.length < Game.MAX_PLAYERS

    isReady: ->
        return @playerList.length == Game.MAX_PLAYERS

    start: ->
        _this = this

        characterList = []

        interval = setInterval(
            () ->
                console.log 'start interval'
                if characterList.length >= Game.NB_CHARACTERS
                    clearInterval(interval)
                    return

                character = _this.generateCharacter()
                setTimeout(
                    () ->
                        characterList.push character
                        console.log 'character position: ' + character.startX
                    Math.floor(Math.random() * 5000)
                )

            100
        )


    generateCharacter: ->
        startX = Math.random()
        return new Character(startX)

module.exports = Game
