console.log 'hello phaser'

class Coord
    constructor: (@x, @y) ->

class Player
    constructor: (@game, @id) ->
        @bucket = @game.plateforms.create 0, 0, 'ground'
        @bucket.playerParent = this
        @bucket.enableBody = true
        @bucket.scale.setTo 0.3, 2
        @bucket.body.immovable = true
        @score = 0
        @scoreText = null

    captureBall: (ball) ->
        console.log @score
        ball.kill()
        @score += 10
        @displayScore()

    displayScore: () ->
        @scoreText.setText "player #{@id}: #{@score}"

class Game
    GameStatus =
        INIT : 1
        RUNNING : 2
        SCORE : 3

    constructor: (@status, @players) ->
        # basic config
        @balls = null
        @plateforms = null
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
            update: (-> self.update())
        )


    generate_fake_player: () ->
        x = y = 0
        for i in [0..4]
            @players.push(new Player(this, i))

    generate_fake_balls: () ->
        for i in [0..12]
            rd = Math.random()
            if 0.95  < rd
                star = @balls.create i * 80, 0, 'star'
                star.body.gravity.y = 500
                star.body.bounce.y = 0.7


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

    create: () ->
      console.log ':create'
      @phaser.add.sprite 0, 0, 'sky'

      @plateforms = @phaser.add.group()
      @plateforms.enableBody = true;

      @generate_fake_player()

      @set_players_position()

      #cursors = @phaser.input.keyboard.createCursorKeys()
      @balls = @phaser.add.group()
      @balls.enableBody = true;

    collectBalls: (plateform, ball) ->
      plateform.playerParent.captureBall(ball)

    update: () ->
      @phaser.physics.arcade.overlap @plateforms, @balls, @collectBalls, null, this

      @new_line = new Phaser.Line 64, 64, 200, 300
      @phaser.input.onDown.add(@click, this);

      #@phaser.physics.overlap @balls, @collectStar, null, this
      @generate_fake_balls()

      if @dragging
          if @phaser.input.activePointer.isDown
            @new_line.end.set(@phaser.input.activePointer.x, @phaser.input.activePointer.y)
          else
            @dragging = false

    click: ->
      console.log('click');



game = new Game()
