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
    y = this.game.phaser.world.height - 45;
    this.bucket = this.game.buckets.create(x, y, 'cloud');
    this.bucket.width = max_space_player - 10;
    this.bucket.body.data.motionState = p2.Body.STATIC;
    this.bucket.body.uuid = this.id;
    this.bucket.playerParent = this;
    this.bucket.scale.setTo(1, 1);
    debugger
    this.scoreText = this.game.phaser.add.text(x - 70, y, '', {
      font: '22px arial',
      fill: '#000'
    });
    console.log(id, avatar, name, position);
  }

  Player.prototype.addScore = function(score) {
    this.score += score;
    return this.scoreText.setText(this.name + ": " + this.score);
  };

  return Player;

})();

Ball = (function() {
  function Ball(game, coord, score, type) {
    this.game = game;
    this.coord = coord;
    this.score = score;
    this.type = type;
    this.ball = this.game.balls.create(this.coord, 0, 'nyancat');
    this.ball.physicsBodyType = Phaser.Physics.P2JS;
    this.ball.body.onBeginContact.add(this.captureBall, this);
  }

  Ball.prototype.captureBall = function(k) {
    if (k.sprite.key === 'cloud') {
      this.game.players[k.uuid].addScore(this.score);
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
    });
    this.socket = socket;
    this.socket.on('new player', (function(data) {
      return console.log(data);
    }));
    this.socket.on('character spawned', (function(data) {
      new Ball(self, data.startX * self.phaser.width, 0, 'facecat');
    }));
    this.socket.on('game stop', (function(data) {
      console.log(data);
    }));

  }

  Game.prototype.generate_fake_balls = function() {
    var ball, i, rd, _i, _results;
    _results = [];
    for (i = _i = 0; _i <= 12; i = ++_i) {
      rd = Math.random();
      if (0.95 < rd) {
        _results.push(ball = new Ball(this, i * 80, 10, 'facecat'));
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  Game.prototype.preload = function() {
    console.log(':preload');
    this.phaser.load.image('sky', '/assets/images/sky.png');
    this.phaser.load.image('cloud', '/assets/images/cloud1.png');
    this.phaser.load.image('fb_evil', '/assets/images/fb-evil.png');
    this.phaser.load.image('all_the_things', '/assets/images/allthethings.png');
    this.phaser.load.image('nyancat', '/assets/images/nyancat.png');
    this.phaser.load.image('unicorn', '/assets/images/unicorn.png');
    this.phaser.load.image('trollface', '/assets/images/trollface.png');
    this.phaser.load.image('nope', '/assets/images/nope.png');
    return this.phaser.load.image('collider', '/assets/images/circle.png');
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
    console.log(_ref);
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
    this.new_line = new Phaser.Line(0, 0, 0, 0);

    socket.on('', function() {

    });

    return this.phaser.input.onDown.add(this.click, this);
  };

  Game.prototype.collectBalls = function(plateform, ball) {
    return plateform.playerParent.captureBall(ball);
  };

  Game.prototype.buildCollider = function(collider) {
    var collider_sprite;
    collider_sprite = this.colliders.create(collider.x, collider.y, 'collider');
    this.phaser.physics.p2.enable(collider_sprite, false);
    collider_sprite.body.data.motionState = p2.Body.STATIC;
    return collider_sprite.body.data.gravityScale = 0;
  };

  Game.prototype.update = function() {

  };

  Game.prototype.render = function() {};

  Game.prototype.click = function(pointer) {
    return this.buildCollider(pointer);
  };

  return Game;

})();

window.Game = Game;

},{}]},{},[1])
