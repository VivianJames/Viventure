define(function(require) {
	'use strict';
	var Phaser = require('phaser');
	
	var cursors;
	
	var Player = function (game) {
		var self = this;

    Phaser.Sprite.call(this, game, 900, game.world.height - 200, 'vivian');

		cursors = game.input.keyboard.createCursorKeys();
		
		game.physics.arcade.enable(self);
		self.body.bounce.y = 0;
		self.body.gravity.y = 800;
		self.body.collideWorldBounds = true;
    
    game.add.existing(this);
	};
	
	Player.prototype = Object.create(Phaser.Sprite.prototype);
	Player.prototype.constructor = Player;
	
	Player.prototype.update = function() {
		var self = this;
	
    if (cursors.left.isDown) {
			this.body.velocity.x = -150;
		}
		else if (cursors.right.isDown) {
			this.body.velocity.x = 150;
		}
		else {
			this.body.velocity.x = 0;
		}
	
		if (cursors.up.isDown && self.body.touching.down) {
			this.body.velocity.y = -350;
		}
	};
	
	return Player;
});