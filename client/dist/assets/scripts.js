(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Ball, Coord, Game, Player;

console.log('hello phaser');

Coord = (function() {
  function Coord(x, y) {
    this.x = x;
    this.y = y;
  }

  return Coord;

})();

Player = (function() {
  function Player(game,idx, id, avatar, name, position, score) {
    var max_space_player, nbr_player, pointer, x, y;
    this.game = game;
    this.id = id;
    this.avatar = avatar;
    this.name = name;
    this.position = position;
    this.score = score;
    nbr_player = 5;
    max_space_player = this.game.phaser.width / (nbr_player);
    pointer = max_space_player + idx * max_space_player - (max_space_player / 2);
    x = max_space_player + idx * max_space_player - (max_space_player / 2);
    y = this.game.phaser.world.height - 110;
    this.remainingColliders = 5
    this.bucket = this.game.buckets.create(x, y, 'cloud'+ idx);
    this.bucket.width = max_space_player - 10;
    this.bucket.body.data.motionState = p2.Body.STATIC;
    this.bucket.body.uuid = this.id;
    this.bucket.playerParent = this;
    this.bucket.scale.setTo(1, 1);
    this.game.phaser.add.text(x - 50, y+50, this.name,{
        font: '28px arial',
        fill: '#fff'
    });

    this.scoreText = this.game.phaser.add.text(x - 60, y+70, '0', {
      font: '25px arial',
      fontWeight: 600,
      fill: '#1174AC'
    });
  }

  Player.prototype.displayScore = function(score) {
    this.score = parseInt(score);
    this.scoreText.setText(this.score);
  }

  Player.prototype.sendScore = function(score) {
    this.score += parseInt(score);
    this.game.socket.emit('update score', this.score);
  };

  return Player;

})();

Ball = (function() {
  function Ball(game, coord, score, type) {
    this.game = game;
    this.coord = coord;
    this.score = score;
    this.type = type;
    this.ball = this.game.balls.create(this.coord, 0, type);
    this.ball.physicsBodyType = Phaser.Physics.P2JS;
    this.ball.body.onBeginContact.add(this.captureBall, this);
  }

  Ball.prototype.captureBall = function(k) {
    if (k.sprite.key.indexOf('cloud')  !== -1) {
      this.game.players[k.uuid].sendScore(this.score);
      return this.ball.kill();
    }
  };

  return Ball;

})();

Game = (function() {
  function Game(initPlayers) {
    var self;
    this.initPlayers = initPlayers;
    this.players = [];
    this.balls = null;
    this.buckets = null;
    this.colliders = null;
    self = this;
    this.phaser = new Phaser.Game(1200, 680, Phaser.AUTO, 'game', {
      preload: (function() {
        return self.preload();
      }),
      create: (function() {
        return self.create();
      }),
      update: (function() {
        return self.update();
      }),
      render: (function() {
        return self.render();
      })
    }, true);
    this.socket = socket;

    this.socket.on('character spawned', (function(data) {
      new Ball(self, data.startX * self.phaser.width, data.score, data.name);
    }));

    this.socket.on('game stop', (function(data) {

    }));

    this.socket.on('bubble added', function(player, coord) {
      console.log('buddle added', coord);
      self.buildCollider(coord);
    });

    this.socket.on('score updated', function(player) {
      console.log('score updated', player);
      self.players[player.id].displayScore(player.score);
    })

  }

  Game.prototype.preload = function() {
    console.log(':preload');
    this.phaser.load.image('cloud0', '/assets/images/cloud1.png');
    this.phaser.load.image('cloud1', '/assets/images/cloud2.png');
    this.phaser.load.image('cloud2', '/assets/images/cloud3.png');
    this.phaser.load.image('cloud3', '/assets/images/cloud4.png');
    this.phaser.load.image('cloud4', '/assets/images/cloud5.png');
    this.phaser.load.image('Facebook', '/assets/images/fb-evil.png');
    this.phaser.load.image('Cat', '/assets/images/cat.png');
    this.phaser.load.image('NyanCat', '/assets/images/nyancat.png');
    this.phaser.load.image('Unicorn', '/assets/images/unicorn.png');
    this.phaser.load.image('Trollface', '/assets/images/trollface.png');
    this.phaser.load.image('collider', '/assets/images/NSA.png');
    _ref = this.initPlayers.playerList;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      p = _ref[_i];
      this.phaser.load.image(p.id, p.avatar);
    }
  };

  Game.prototype.create = function() {
    var p, _i, _len, _ref;
    console.log(':create');
    this.phaser.physics.startSystem(Phaser.Physics.P2JS);
    this.phaser.physics.p2.gravity.y = 50;
    this.phaser.add.sprite(0, 0, 'sky');
    this.buckets = this.phaser.add.group();
    this.buckets.enableBody = true;
    this.buckets.physicsBodyType = Phaser.Physics.P2JS;
    _ref = this.initPlayers.playerList;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      p = _ref[_i];
      this.players[p.id] = new Player(this, _i, p.id, p.avatar, p.name, p.position, p.score);
    }
    this.balls = this.phaser.add.group();
    this.balls.enableBody = true;
    this.balls.physicsBodyType = Phaser.Physics.P2JS;
    this.colliders = this.phaser.add.group();
    this.colliders.enableBody = true;
    this.colliders.physicsBodyType = Phaser.Physics.P2JS;

    return this.phaser.input.onDown.add(this.click, this);
  };

  Game.prototype.collectBalls = function(plateform, ball) {
    return plateform.playerParent.captureBall(ball);
  };

  Game.prototype.buildCollider = function(coord) {
    var collider_sprite;
    collider_sprite = this.colliders.create(coord.x, coord.y, 'collider');
    this.phaser.physics.p2.enable(collider_sprite, false);
    collider_sprite.body.data.motionState = p2.Body.STATIC;
    return collider_sprite.body.data.gravityScale = 0;
  };

  Game.prototype.update = function() {

  };

  Game.prototype.render = function() {};

  Game.prototype.click = function(pointer) {
      if (this.remainingColliders > 0) {
          this.socket.emit('add bubble', {
              x: pointer.x,
              y: pointer.y
          });
          this.remainingColliders =- 1;
      }
      return Game;
  }

})();

window.Game = Game;

},{}]},{},[1])
