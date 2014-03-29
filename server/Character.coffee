class Character

    constructor: (@startX)->


class Trollface extends Character
    @PROBABILITY = 10
    constructor: (@startX)->
        super(@startX)
        @name = "Trollface"
        @score = 1


class Cat extends Character
    @PROBABILITY = 5
    constructor: (@startX)->
        super(@startX)
        @name = "Cat"
        @score = 2


class NyanCat extends Character
    @PROBABILITY = 3
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
    @PROBABILITY = 2
    constructor: (@startX)->
        super(@startX)
        @name = "Facebook"
        @score = -1


class CharacterFhacktory

    @MAPPING = {
        "Trollface": Trollface,
        "Cat": Cat,
        "NyanCat": NyanCat,
        "Unicorn": Unicorn,
        "Facebook": Facebook,
    }

    getWeightedMapping: ->
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
        names = this.getWeightedMapping()
        idx = Math.floor(Math.random() * names.length)
        name = names[idx]

        newChar = this.newCharacter(name, startX)
        console.log 'New charactere created: ' + newChar.name
        return newChar

    newCharacter: (name, startX) ->
        _cls = CharacterFhacktory.MAPPING[name]
        x = new _cls(startX)

        return new _cls(startX)


module.exports = CharacterFhacktory
