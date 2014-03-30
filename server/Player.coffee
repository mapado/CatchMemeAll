crypto = require 'crypto'

class Player
    # A player registered in a Game
    constructor: (@id)->
        @score = 0
        @name = 'Anonymous'
        @position = 0
        avatarHash = crypto.createHash('md5').update(@id).digest('hex')
        @avatar = 'http://www.gravatar.com/avatar/' + avatarHash + '?d=monsterid&s=48'

    sayHello: ->
        console.log 'Hello from ' + @id

    sayGoodbye: ->
        console.log 'Goodbye from ' + @id

module.exports = Player
