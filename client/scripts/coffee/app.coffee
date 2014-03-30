console.log 'hello phaser'


#-----------------------------------------------------------
class Coord
    constructor: (@x, @y) ->

class Player
    constructor: (@game, @id, @avatar, @name, @position, @score) ->
        nbr_player = 5
        max_space_player = @game.phaser.width / (nbr_player + 1)
        console.log "bisous bisous", @position
        pointer = max_space_player + @position * max_space_player - (max_space_player / 2)

        x =  max_space_player + @position * max_space_player - (max_space_player / 2)
        y =  @game.phaser.world.height - 25

        @bucket = @game.buckets.create x, y, 'cloud'
        @bucket.width = max_space_player - 10
        @bucket.body.data.motionState = p2.Body.STATIC
        @bucket.body.uuid = @id
        @bucket.playerParent = this
        @bucket.scale.setTo 0.3, 2
        @scoreText = @game.phaser.add.text pointer, 16, '', font: '32px arial', fill: '#fff'

    addScore: (score) ->
        @score += score
        @scoreText.setText "player #{@id}: #{@score}"

class Ball
    constructor: (@game, @coord, @score, @type) ->
        @ball = @game.balls.create @coord, 0, 'nyancat'
        @ball.physicsBodyType = Phaser.Physics.P2JS

        @ball.body.onBeginContact.add(@captureBall, this)

    captureBall: (k) ->
        if k.sprite.key == 'cloud'
            @game.players[k.uuid].addScore(@score)
            @ball.kill()

class Game

    constructor: (@initPlayers) ->

        # basic config
        @balls = null
        @buckets = null
        @colliders = null
        # Generate the word
        self = this
        @phaser = new Phaser.Game(
            1200,
            680,
            Phaser.AUTO,
            'game',
            preload:( -> self.preload()),
            create: ( -> self.create()),
            update: (-> self.update()),
            render: (-> self.render())
        )
        @socket = socket
        @socket.on('new player', ((data) -> console.log data))
        @socket.on('character spawned', ((data) -> console.log data))
        @socket.on('game stop', (-> console.log "GAME STOP" ))


    generate_fake_balls: () ->
        for i in [0..12]
            rd = Math.random()
            if 0.95  < rd
                ball = new Ball(this, i*80, 10, 'facecat')


    preload: () ->
      console.log ':preload'
      @phaser.load.image 'sky', '/assets/images/sky.png'
      @phaser.load.image 'cloud', '/assets/images/cloud1.png'
      @phaser.load.image 'fb_evil', '/assets/images/fb-evil.png'
      @phaser.load.image 'all_the_things', '/assets/images/allthethings.png'
      @phaser.load.image 'nyancat', '/assets/images/nyancat.png'
      @phaser.load.image 'unicorn', '/assets/images/unicorn.png'
      @phaser.load.image 'trollface', '/assets/images/trollface.png'
      @phaser.load.image 'nope', '/assets/images/nope.png'
      @phaser.load.image 'collider', '/assets/images/circle.png'

    create: () ->
        console.log ':create'
        @phaser.physics.startSystem Phaser.Physics.P2JS
        @phaser.physics.p2.gravity.y = 200
        @phaser.add.sprite 0, 0, 'sky'

        @buckets = @phaser.add.group()
        @buckets.enableBody = true
        @buckets.physicsBodyType = Phaser.Physics.P2JS


        for p in @initPlayers.playerList
            @players[p.id] = new Player(this, p.id, p.avatar, p.name, p.position, p.score )

        @balls = @phaser.add.group()
        @balls.enableBody = true
        @balls.physicsBodyType = Phaser.Physics.P2JS

        @colliders = @phaser.add.group()
        @colliders.enableBody = true
        @colliders.physicsBodyType = Phaser.Physics.P2JS

        @new_line = new Phaser.Line 0, 0, 0, 0
        @phaser.input.onDown.add(@click, this)


    collectBalls: (plateform, ball) ->
      plateform.playerParent.captureBall(ball)

    buildCollider: (collider) ->
        collider_sprite = @colliders.create  collider.x, collider.y, 'collider'
        @phaser.physics.p2.enable(collider_sprite, false)
        collider_sprite.body.data.motionState = p2.Body.STATIC
        collider_sprite.body.data.gravityScale = 0

    update: () ->
      @generate_fake_balls()


    render: () ->

    click: (pointer) ->
        @buildCollider(pointer)

window.Game = Game
