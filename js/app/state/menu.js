define(function(require) {
	'use strict';
  var Phaser = require('phaser');
  
  var menu = new Phaser.State();
	
	menu.preload = function() {
		menu.load.spritesheet('startbutton', 'asset/startbutton.png', 100, 60);
  };
  

  var btnstart;
  
  menu.create = function() {
		btnstart = menu.add.button(menu.world.centerX - 50, menu.world.centerY - 30, 'startbutton', function(){
		  menu.game.state.start('street');
		}, this, 1, 0);
		
  };
  	
  menu.update = function() {
    
  };
  
  return menu;
});