define(function(require) {
	'use strict';
	var Phaser = require('phaser');
	
	var Entity = function (game, posx, posy, image) {
		var self = this;
		
		Phaser.Sprite.call(self, game, posx, posy, image);
		
		game.physics.arcade.enable(self);
		self.body.bounce.y = 0;
		self.body.gravity.y = 800;
		self.body.collideWorldBounds = true;

    
    game.add.existing(self);
	};
	
	Entity.prototype = Object.create(Phaser.Sprite.prototype);
	Entity.prototype.constructor = Entity;
	
	return Entity;
});