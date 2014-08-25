define(function(require) {
	'use strict';
  var Phaser = require('phaser');
  
  var preloader = new Phaser.State();
  
  var loadingBar;
  var loadingOverlay;
	
	preloader.preload = function() {
		
		loadingBar = preloader.add.sprite(preloader.world.centerX - 150, preloader.world.centerY - 25, 'loadingbar');
		loadingOverlay = preloader.add.sprite(preloader.world.centerX - 154, preloader.world.centerY - 25, 'loadingoverlay');
		
		preloader.load.setPreloadSprite(loadingBar);
		
		/* Interface */
		//Main Menu
		preloader.load.spritesheet('startbutton', 'asset/startbutton.png', 100, 60);
		
		//Interactable Components
		preloader.load.image('emptybubble', 'asset/emptybubble.png');
		preloader.load.image('examinebubble', 'asset/examinebubble.png');
		preloader.load.image('gearbubble', 'asset/gearbubble.png');
		preloader.load.image('grabbubble', 'asset/grabbubble.png');
		preloader.load.image('openbubble', 'asset/openbubble.png');
		
		/* World */
		//Entites
		preloader.load.image('vivian', 'asset/vivian.png');
		preloader.load.image('key', 'asset/key.png');
		
		//Background
		preloader.load.image('bar', 'asset/bar.png');
		preloader.load.image('cathedral', 'asset/cathedral.png');
		preloader.load.image('sky', 'asset/sky.png');
		preloader.load.image('sidewalk', 'asset/sidewalk.png');
		
		//Ground
		preloader.load.image('street', 'asset/street.png');
  };

  preloader.create = function() {
  	loadingBar.cropEnabled = false;
		preloader.game.state.start('menu');
  };
  	
  preloader.update = function() {
    
  };
  
  return preloader;
});