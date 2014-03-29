console.log 'hello phaser'

class Coord
    constructor: (@x, @y) ->

class Player
    constructor: (@game, @id, @score) ->
        @bucket = @game.plateforms.create 0, 0, 'ground'
        @bucket.scale.setTo 0.3, 2
        @bucket.body.immovable = true

class Game
    GameStatus = 
        INIT : 1
        RUNNING : 2
        SCORE : 3

    constructor: (@status, @players) ->
        # basic config
        @balls = null
        @plateforms = null
        @scoreText = null
        @score = 0
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
            @players.push(new Player(this, i, 0))

    set_players_position: () ->
        nbr_player = @players.length
        max_space_player = @phaser.width / (nbr_player + 1)
        for player  in @players
            player.bucket.width = max_space_player - 10
            player.bucket.x =  max_space_player + player.id * max_space_player - (max_space_player / 2)
            player.bucket.y =  @phaser.world.height - 64


    preload: () ->
      console.log ':preload'
      @phaser.load.image 'sky', '/assets/images/sky.png'
      @phaser.load.image 'ground', '/assets/images/platform.png'
      @phaser.load.image 'star', '/assets/images/star.png'

    create: () ->
      console.log ':create'
      @phaser.add.sprite 0, 0, 'sky'
      @phaser.add.sprite 0, 0, 'star'

      @plateforms = @phaser.add.group()

      @generate_fake_player()

      @set_players_position()

      #cursors = @phaser.input.keyboard.createCursorKeys()
      @balls = @phaser.add.group()

      for i in [0..12]
        star = @balls.create i * 70, 0, 'star'
        star.body.gravity.y = 6
        star.body.bounce.y = 0.7 + Math.random() * 0.2

      console.log @plateforms.countLiving()
      console.log @balls.countLiving()

      scoreText = @phaser.add.text 16, 16, 'score: 0', font: '32px arial', fill: '#000'


    collectStar: (player, star) ->
      star.kill()
      score += 10
      scoreText.content = "Score: #{score}"

    update: () ->
      @phaser.physics.collide @balls, @plateforms
      #@phaser.physics.overlap @balls, @collectStar, null, this

game = new Game()
