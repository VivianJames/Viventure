(function () {
  'use strict';
    
	requirejs.config({
			"baseUrl": "js",
			"paths": {
				"Phaser": "lib/phaser.min"
			},
			"map": {
					"*": {
							"phaser": "Phaser"
					}
			}
	});
	
	require(['app/game'], function (Game) {
		var game = new Game();
		game.start();
  });
	
}());