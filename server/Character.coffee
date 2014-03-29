class Character

    constructor: (@startX)->


class Trollface extends Character
    constructor: (@startX)->
        super(@startX)
        @name = "Trollface"
        @score = 1


class Cat extends Character
    constructor: (@startX)->
        super(@startX)
        @name = "Cat"
        @score = 2


class NyanCat extends Character
    constructor: (@startX)->
        super(@startX)
        @name = "NyanCat"
        @score = 3


class Unicorn extends Character
    constructor: (@startX)->
        super(@startX)
        @name = "Unicorn"
        @score = 5


class Facebook extends Character
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

    newRandomCharacter: (startX) ->
        keys = Object.keys(CharacterFhacktory.MAPPING)
        idx = Math.floor(Math.random() * keys.length)
        name = keys[idx]
        return this.newCharacter(name, startX)

    newCharacter: (name, startX) ->
        _cls = CharacterFhacktory.MAPPING[name]
        x = new _cls(startX)
        return new _cls(startX)


module.exports = CharacterFhacktory