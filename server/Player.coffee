crypto = require 'crypto'

class Player
    constructor: (@id)->
        @score = 0
        @name = 'Anonymous'
        avatarHash = crypto.createHash('md5').update(@id).digest('hex')
        @avatar = 'http://www.gravatar.com/avatar/' + avatarHash + '?d=monsterid&s=48'

    sayHello: ->
        console.log 'Hello from ' + @id + '\nMy avatar is: ' + @avatar

    sayGoodbye: ->
        console.log 'Goodbye from ' + @id

module.exports = Player
