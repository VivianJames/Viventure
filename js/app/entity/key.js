define(function(require) {
	'use strict';
	var Phaser = require('phaser');
	var Entity = require('app/entity/entity');
	
	var Key = function (game, posx, posy) {
		var self = this;
		
		Entity.call(self, game, posx, posy, 'key');
		
		self.body.bounce.y = 0.20;
		self.body.gravity.y = 700;
		
		self.update = function() {

		};
	};
	
	Key.prototype = Object.create(Entity.prototype);
	Key.prototype.constructor = Key;
	
	return Key;
});