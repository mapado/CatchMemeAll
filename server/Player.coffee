class Player
    constructor: (@id)->
        @score = 0

    sayHello: ->
        console.log 'Hello from ' + @id

    sayGoodbye: ->
        console.log 'Goodbye from ' + @id

module.exports = Player
