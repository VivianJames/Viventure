define(function(require) {
	'use strict';
	var Phaser = require('phaser');
	var Entity = require('app/entity/entity');
	
	var cursors;
	
	var Player = function (game) {
		var self = this;
		
		Entity.call(self, game, 900, game.world.height - 200, 'vivian');

		cursors = game.input.keyboard.createCursorKeys();
		
		self.update = function() {
	    if (cursors.left.isDown) {
				self.body.velocity.x = -150;
			}
			else if (cursors.right.isDown) {
				self.body.velocity.x = 150;
			}
			else {
				self.body.velocity.x = 0;
			}
		
			if (cursors.up.isDown && self.body.touching.down) {
				self.body.velocity.y = -350;
			}
		};
	};
	
	Player.prototype = Object.create(Entity.prototype);
	Player.prototype.constructor = Player;
	
	return Player;
});