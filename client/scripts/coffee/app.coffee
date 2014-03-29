console.log 'hello phaser'

class Coord
    constructor: (@x, @y) ->

class Player
    constructor: (@game, @id, @score) ->
        ground = platforms.create (@game.phaser.world.width / @game.players.length)*id, @game.phaser.world.height - 64, 'ground'
        ground.scale.setTo 0.3, 2
        ground.body.immovable = true

class Game
    GameStatus = 
        INIT : 1
        RUNNING : 2
        SCORE : 3

    constructor: (@status, @players) ->
        # basic config
        @window_x = 1200
        @window_y = 680
        @stars = null
        @scoreText = null
        @score = 0
        @players = []
        # Generate the word
        @phaser = new Phaser.Game @window_x, @window_y, Phaser.AUTO, '', preload: @preload, create: @create, update: @update
        @generate_fake_player()
        @platforms = @phaser.add.group()


    generate_fake_player: () ->
        x = y = 0
        for i in [0..3]
            @players.push new Player @game, i, 0

    preload: () ->
      console.log ':preload'
      console.log this
      this.load.image 'sky', '/assets/images/sky.png'
      this.load.image 'ground', '/assets/images/platform.png'
      this.load.image 'star', '/assets/images/star.png'
      #game.load.spritesheet 'dude', '/assets/images/dude.png', 32, 48


    create: () ->
      console.log ':create'
      @phaser.add.sprite 0, 0, 'sky'
      @phaser.add.sprite 0, 0, 'star'

      #cursors = @phaser.input.keyboard.createCursorKeys()
      stars = @phaser.add.group()

      for i in [0..12]
        star = stars.create i * 70, 0, 'star'
        star.body.gravity.y = 6
        star.body.bounce.y = 0.7 + Math.random() * 0.2

      scoreText = @phaser.add.text 16, 16, 'score: 0', font: '32px arial', fill: '#000'


    collectStar: (player, star) ->
      star.kill()
      score += 10
      scoreText.content = "Score: #{score}"

    update: () ->
      @phaser.physics.collide stars, platforms
      @phaser.physics.overlap stars, collectStar, null, this

game = new Game()
