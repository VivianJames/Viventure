define(function(require) {
	'use strict';
  var Phaser = require('phaser');
  var game = Phaser.game;
  
  var menu;
	
	menu.preload = function() {
		game.load.image('vivian', 'asset/vivian.png');
  };
  
  var vivian;	
  
  menu.create = function() {
		vivian = game.add.sprite(20, 20, 'vivian');
  };
  	
  menu.update = function() {

  };
  
  return menu;
});