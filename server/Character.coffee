# Definiition of the character class that can spawn on the Game
# and their associated probability of appearance, score and name

class Character

    constructor: (@startX)->


class Trollface extends Character
    @PROBABILITY = 100
    constructor: (@startX)->
        super(@startX)
        @name = "Trollface"
        @score = 1


class Cat extends Character
    @PROBABILITY = 50
    constructor: (@startX)->
        super(@startX)
        @name = "Cat"
        @score = 2


class NyanCat extends Character
    @PROBABILITY = 30
    constructor: (@startX)->
        super(@startX)
        @name = "NyanCat"
        @score = 3


class Unicorn extends Character
    @PROBABILITY = 1
    constructor: (@startX)->
        super(@startX)
        @name = "Unicorn"
        @score = 5


class Facebook extends Character
    @PROBABILITY = 20
    constructor: (@startX)->
        super(@startX)
        @name = "Facebook"
        @score = -1

class Mapado extends Character
    @PROBABILITY = 5
    constructor: (@startX)->
        super(@startX)
        @name = "Mapado"
        @score = 100



class CharacterFhacktory
    # Create new characters

    @MAPPING = {
        "Trollface": Trollface,
        "Cat": Cat,
        "NyanCat": NyanCat,
        "Unicorn": Unicorn,
        "Facebook": Facebook,
        "Mapado": Mapado
    }

    getWeightedMapping: ->
        # Generate an array containing more elements of the more probable
        # characters, and inversely
        if (this.weightedMapping == undefined)
            console.log 'Generating characters wheigted mapping'
            keys = Object.keys(CharacterFhacktory.MAPPING)
            this.weightedMapping = []

            for name in keys
                _cls = CharacterFhacktory.MAPPING[name]
                _cls.PROBABILITY
                this.weightedMapping.push(name) for j in  [1.._cls.PROBABILITY]

        return this.weightedMapping

    newRandomCharacter: (startX) ->
        # Create new random character at a given X coordinate
        names = this.getWeightedMapping()
        idx = Math.floor(Math.random() * names.length)
        name = names[idx]

        newChar = this.newCharacter(name, startX)
        console.log 'New charactere created: ' + newChar.name
        return newChar

    newCharacter: (name, startX) ->
        # Create a new named character at a given X coordinate
        _cls = CharacterFhacktory.MAPPING[name]
        return new _cls(startX)


module.exports = CharacterFhacktory
