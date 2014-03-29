class Player
    constructor: (@id)->

    sayHello: ->
        console.log 'Hello from ' + @id

    sayGoodbye: ->
        console.log 'Goodbye from ' + @id

module.exports = Player
