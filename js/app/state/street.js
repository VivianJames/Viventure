define(function(require) {
	'use strict';
  var Phaser = require('phaser');
	var Player = require('app/entity/player');
	var Key = require('app/entity/key');
	
	var street = new Phaser.State();
	
	street.preload = function() {

	};
	
	var gotkey = false;
	var player;
	var bar;
	var cathedral;
	var roads;
	var sidewalks;
	var sky;
	var key;
	
	street.create = function() {
		street.physics.startSystem(Phaser.Physics.ARCADE);
	
		street.world.setBounds(0, 0, 1600, 600);
	
		sky = street.add.sprite(0, 0, 'sky');
		bar = street.add.sprite(0, 0, 'bar');
		cathedral = street.add.sprite(900, -450, 'cathedral');
		
	
		roads = street.add.group();
		sidewalks = street.add.group();
	
		roads.enableBody = true;
		sidewalks.enableBody = true;
	
		var barroad = roads.create(0, street.world.height - 34, 'street');
		barroad.body.immovable = true;
		
		var centralroad = roads.create(800, street.world.height - 34, 'street');
		centralroad.body.immovable = true;
		
		var barsidewalk = sidewalks.create(0, street.world.height - 50, 'sidewalk');
		barsidewalk.body.immovable = true;
		
		var centralsidewalk = sidewalks.create(800, street.world.height - 50, 'sidewalk');
		centralsidewalk.body.immovable = true;
		
		key = new Key(street, 20, street.world.height - 200);
	
		player = new Player(street);
	
		street.camera.follow(player);
	};
	
	street.update = function() {
  	street.physics.arcade.collide(player, roads);
		street.physics.arcade.collide(key, roads);
		
		street.physics.arcade.overlap(player, key, function(player, key) {
			key.kill();
			gotkey = true;
		}, null, this);
		
		sky.x = street.camera.x;
	};
	
	return street;

});