define(function(require) {
	'use strict';
	var Phaser = require('phaser');
	var Menu = require('app/state/menu');
	var Street = require('app/state/street');
	var Preloader = require('app/state/preloader');
	var Boot = require('app/state/boot')
	
	var Game = function() {
		var self = this,
			game = self.game;

		self.start = function() {
			game = new Phaser.Game(800, 600, Phaser.AUTO, 'divGame');

			//Add States
			game.state.add('boot', Boot);
			game.state.add('preloader', Preloader);
			game.state.add('menu', Menu);
			game.state.add('street', Street);

			game.state.start('boot');
		};

	};
	return Game;
});