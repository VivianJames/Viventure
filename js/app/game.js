define(function(require) {
	'use strict';
  var Phaser = require('phaser');
  var Menu = require('app/state/menu');
  var Street = require('app/state/street');
  
  var Game = function() {
  	var self = this,
  			game = self.game;
  	
  	self.start = function() {
			game = new Phaser.Game(800, 600, Phaser.AUTO, 'divGame');
			
			//Add States
			game.state.add('main', Menu);
	    game.state.add('street', Street);
	    
	    game.state.start('main');
  	};
  	
  };
  return Game;
});