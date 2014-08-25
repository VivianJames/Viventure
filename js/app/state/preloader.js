define(function(require) {
	'use strict';
  var Phaser = require('phaser');
  
  var preloader = new Phaser.State();
	
	preloader.preload = function() {
		preloader.load.spritesheet('startbutton', 'asset/startbutton.png', 100, 60);
		preloader.load.image('vivian', 'asset/vivian.png');
		preloader.load.image('cathedral', 'asset/cathedral.png');
		preloader.load.image('bar', 'asset/bar.png');
		preloader.load.image('street', 'asset/street.png');
		preloader.load.image('sidewalk', 'asset/sidewalk.png');
		preloader.load.image('key', 'asset/key.png');
		preloader.load.image('sky', 'asset/sky.png');
  };

  
  preloader.create = function() {
		preloader.game.state.start('menu');
  };
  	
  preloader.update = function() {
    
  };
  
  return preloader;
});