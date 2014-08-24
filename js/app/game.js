define(function(require) {
	'use strict';
  var Phaser = require('phaser');
  var Player = require('app/player');
  
  var Game = function() {
  	var self = this,
  			game = self.game;
  	
  	self.start = function() {
			game = new Phaser.Game(800, 600, Phaser.AUTO, '', { 
        preload: preload, 
        create: create,
        update: update
	    });
  	};
  	
  	var preload = function() {
  		game.load.image('vivian', 'asset/vivian.png');
			game.load.image('cathedral', 'asset/cathedral.png');
			game.load.image('bar', 'asset/bar.png');
			game.load.image('street', 'asset/street.png');
			game.load.image('sidewalk', 'asset/sidewalk.png');
			game.load.image('key', 'asset/key.png');
			game.load.image('sky', 'asset/sky.png');
  	}
  	
  	var gotkey = false;
		var player;
		var bar;
		var cathedral;
		var streets;
		var sidewalks;
		var sky;
		var key;
  	
  	var create = function() {
  		game.physics.startSystem(Phaser.Physics.ARCADE);
		
			game.world.setBounds(0, 0, 1600, 600);
		
			sky = game.add.sprite(0, 0, 'sky');
			bar = game.add.sprite(0, 0, 'bar');
			cathedral = game.add.sprite(900, -450, 'cathedral');
			
		
			streets = game.add.group();
			sidewalks = game.add.group();
		
			streets.enableBody = true;
			sidewalks.enableBody = true;
		
			var barstreet = streets.create(0, game.world.height - 34, 'street');
			barstreet.body.immovable = true;
			
			var centralstreet = streets.create(800, game.world.height - 34, 'street');
			centralstreet.body.immovable = true;
			
			var barsidewalk = sidewalks.create(0, game.world.height - 50, 'sidewalk');
			barsidewalk.body.immovable = true;
			
			var centralsidewalk = sidewalks.create(800, game.world.height - 50, 'sidewalk');
			centralsidewalk.body.immovable = true;
			
			key = game.add.sprite(20, game.world.height - 200, 'key');
			game.physics.arcade.enable(key);
			key.body.bounce.y = 0.20;
			key.body.gravity.y = 700;
			key.body.collideWorldBounds = true;
		
			player = new Player(game);
		
			game.camera.follow(player);
  	};
  	
  	var update = function() {
	  	game.physics.arcade.collide(player, streets);
			game.physics.arcade.collide(key, streets);
			
			game.physics.arcade.overlap(player, key, function(player, key) {
				key.kill();
				gotkey = true;
			}, null, this);
			
			sky.x = game.camera.x;
  	};
  };
  return Game;
});