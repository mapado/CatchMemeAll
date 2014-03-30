console.log 'hello phaser'


#-----------------------------------------------------------
class Coord
    constructor: (@x, @y) ->

class Player
    constructor: (@game, @id, @avatar) ->
        nbr_player = 5
        max_space_player = @game.phaser.width / (nbr_player + 1)

        pointer = max_space_player + @id * max_space_player - (max_space_player / 2)

        x =  max_space_player + @id * max_space_player - (max_space_player / 2)
        y =  @game.phaser.world.height - 64

        @bucket = @game.buckets.create x, y, 'ground'
        @bucket.width = max_space_player - 10
        @bucket.body.data.motionState = p2.Body.STATIC
        @bucket.body.uuid = @id
        @bucket.playerParent = this
        @bucket.scale.setTo 0.3, 2
        @score = 0
        @scoreText = @game.phaser.add.text pointer, 16, '', font: '32px arial', fill: '#fff'

    addScore: (score) ->
        @score += score
        @scoreText.setText "player #{@id}: #{@score}"

class Ball
    constructor: (@game, @coord, @score, @type) ->
        @ball = @game.balls.create @coord, 0, 'star'
        @ball.physicsBodyType = Phaser.Physics.P2JS

        @ball.body.onBeginContact.add(@captureBall, this)

    captureBall: (k) ->
        if k.sprite.key == 'ground'
            @game.players[k.uuid].addScore(@score)
            @ball.kill()



class Game
    GameStatus =
        INIT : 1
        RUNNING : 2
        SCORE : 3

    constructor: (@status, @players) ->
        # basic config
        @balls = null
        @buckets = null
        @colliders = null
        @players = {}
        # Generate the word
        self = this
        @phaser = new Phaser.Game(
            1200,
            680,
            Phaser.AUTO,
            '',
            preload:( -> self.preload()),
            create: ( -> self.create()),
            update: (-> self.update()),
            render: (-> self.render())
        )
        @socket.on('new player', ((data) -> console.log data))
        @socket.on('character spawned', ((data) -> console.log data))
        @socket.on('game stop', (-> console.log "GAME STOP" ))


    generate_fake_player: () ->
        x = y = 0
        for uuid in [0..4]
            @players[uuid] = new Player(this, uuid, null)

    generate_fake_balls: () ->
        for i in [0..12]
            rd = Math.random()
            if 0.95  < rd
                ball = new Ball(this, i*80, 10, 'facecat')


    preload: () ->
      console.log ':preload'
      @phaser.load.image 'sky', '/assets/images/sky.png'
      @phaser.load.image 'ground', '/assets/images/platform.png'
      @phaser.load.image 'circle', '/assets/images/circle.png'
      @phaser.load.image 'star', '/assets/images/star.png'
      @phaser.load.image 'wall', '/assets/images/star.png'

    create: () ->
      console.log ':create'
      @phaser.physics.startSystem Phaser.Physics.P2JS
      @phaser.physics.p2.gravity.y = 500
      @phaser.add.sprite 0, 0, 'sky'

      @buckets = @phaser.add.group()
      @buckets.enableBody = true
      @buckets.physicsBodyType = Phaser.Physics.P2JS

      @generate_fake_player()


      #cursors = @phaser.input.keyboard.createCursorKeys()
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

    buildCollider: (wall) ->
        wall_sprite = @colliders.create  wall.x, wall.y, 'circle'
        @phaser.physics.p2.enable(wall_sprite, false)
        wall_sprite.body.data.motionState = p2.Body.STATIC
        wall_sprite.body.data.gravityScale = 0

    update: () ->
      @generate_fake_balls()


    render: () ->

    click: (pointer) ->
        @buildCollider(pointer)

game = new Game()
