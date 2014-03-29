console.log 'hello phaser'


#-----------------------------------------------------------
class Coord
    constructor: (@x, @y) ->

class Player
    constructor: (@game, @id, @avatar) ->
        @bucket = @game.plateforms.create 0, 0, 'ground'
        @bucket.physicsBodyType = Phaser.Physics.P2JS
        @bucket.playerParent = this
        @bucket.scale.setTo 0.3, 2
        @bucket.body.immovable = true
        #@bucket.body.colides(@game.balls, @captureBall)
        @score = 0
        @scoreText = null

    captureBall: (ball) ->
        ball.kill()
        @score += 10
        @displayScore()

    displayScore: () ->
        @scoreText.setText "player #{@id}: #{@score}"

class Ball
    constructor: (@balls, @coord, @score, @type) ->
        star = @balls.create @coord, 0, 'star'


class Game
    GameStatus =
        INIT : 1
        RUNNING : 2
        SCORE : 3

    constructor: (@status, @players) ->
        # basic config
        @balls = null
        @plateforms = null
        @walls = null
        @players = []
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
        #@socket = socket
        #@socket.on('new player', ((data) -> console.log data))
        #@socket.on('character spawned', ((data) -> console.log data))
        #@socket.on('game stop', (-> console.log "GAME STOP" ))


    generate_fake_player: () ->
        x = y = 0
        for i in [0..4]
            @players.push(new Player(this, i, null))

    generate_fake_balls: () ->
        for i in [0..12]
            rd = Math.random()
            if 0.95  < rd
                ball = new Ball(@balls, i*80, 10, 'facecat')
                ball.physicsBodyType = Phaser.Physics.P2JS

    set_players_position: () ->
        nbr_player = @players.length
        max_space_player = @phaser.width / (nbr_player + 1)
        for player  in @players
            player.bucket.width = max_space_player - 10
            pointer = max_space_player + player.id * max_space_player - (max_space_player / 2)
            player.bucket.x =  max_space_player + player.id * max_space_player - (max_space_player / 2)
            player.bucket.y =  @phaser.world.height - 64
            player.scoreText = @phaser.add.text pointer, 16, '', font: '32px arial', fill: '#fff'


    preload: () ->
      console.log ':preload'
      @phaser.load.image 'sky', '/assets/images/sky.png'
      @phaser.load.image 'ground', '/assets/images/platform.png'
      @phaser.load.image 'star', '/assets/images/star.png'
      @phaser.load.image 'wall', '/assets/images/star.png'

    create: () ->
      console.log ':create'
      @phaser.physics.startSystem Phaser.Physics.P2JS
      @phaser.physics.p2.gravity.y = 500
      @phaser.add.sprite 0, 0, 'sky'

      @plateforms = @phaser.add.group()
      @plateforms.enableBody = true

      @generate_fake_player()

      @set_players_position()

      #cursors = @phaser.input.keyboard.createCursorKeys()
      @balls = @phaser.add.group()
      @balls.enableBody = true
      @balls.physicsBodyType = Phaser.Physics.P2JS

      @walls = @phaser.add.group()
      @walls.enableBody = true
      @walls.physicsBodyType = Phaser.Physics.P2JS

      @new_line = new Phaser.Line 0, 0, 0, 0
      @phaser.input.onDown.add(@click, this)


    collectBalls: (plateform, ball) ->
      plateform.playerParent.captureBall(ball)

    buildWall: (wall) ->
        console.log wall
        dist_y = Math.abs(wall.y1 - wall.y2)
        dist_x = Math.abs(wall.x1 - wall.x2)
        wall_length = Math.sqrt(dist_y * dist_y + dist_x * dist_x)
        angle = Math.atan2( dist_y,  dist_x) * (180/3.14)
        if (wall.y1 - wall.y2 > 0)
            angle = - angle

        wall_sprite = @walls.create  wall.x1, wall.y1, 'ground'
        wall_sprite.width = wall_length
        wall_sprite.height = 20
        wall_sprite.angle = angle
        @phaser.physics.p2.enable(wall_sprite, false)
        #debugger
        wall_sprite.body.fixedRotation = true
        wall_sprite.body.mass = 0
        wall_sprite.body.data.motionState = p2.Body.STATIC

        wall_sprite.body.data.gravityScale = 0
        #wall_prite.body.immovable = true
        console.log wall_sprite

    update: () ->
      #@phaser.physics.arcade.overlap @plateforms, @balls, @collectBalls, null, this
      #@phaser.physics.arcade.collide @balls, @walls

      @generate_fake_balls()

      if @dragging
          if @phaser.input.activePointer.isDown
            @new_line.end.set @phaser.input.activePointer.x, @phaser.input.activePointer.y

          else
            @dragging = false
            @buildWall({
                'x1': @new_line.start.x,
                'y1': @new_line.start.y,
                'x2': @new_line.end.x,
                'y2': @new_line.end.y
            })
            console.log 'push line !'

    render: () ->

    click: (pointer) ->
      @dragging = true
      @new_line.start.set pointer.x, pointer.y

game = new Game()
