define(function(require) {
	'use strict';
	var Phaser = require('phaser');

	var boot = new Phaser.State();

	boot.preload = function() {
		boot.load.image('loadingbar', 'asset/loadingbar.png');
		boot.load.image('loadingoverlay', 'asset/loadingoverlay.png');
	};

	boot.create = function() {
		boot.input.maxPointers = 1;

		boot.stage.disableVisibilityChange = true;

		if (boot.game.device.desktop) {
			boot.scale.pageAlignHorizontally = true;
		}
		else {
			boot.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			boot.scale.minWidth = 480;
			boot.scale.minHeight = 260;
			boot.scale.maxWidth = 1024;
			boot.scale.maxHeight = 768;
			boot.scale.forceLandscape = true;
			boot.scale.pageAlignHorizontally = true;
			boot.scale.setScreenSize(true);
		}

		boot.game.state.start('preloader');
	};

	boot.update = function() {

	};

	return boot;
});