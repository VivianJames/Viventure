var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
	preload: preload,
	create: create,
	update: update
});

function preload() {
	game.load.image('vivian', 'asset/vivian.png');
	game.load.image('cathedral', 'asset/cathedral.png');
	game.load.image('bar', 'asset/bar.png');
	game.load.image('street', 'asset/street.png');
	game.load.image('sidewalk', 'asset/sidewalk.png');
	game.load.image('key', 'asset/key.png');
	game.load.image('sky', 'asset/sky.png');
}

var player;
var bar;
var streets;
var sidewalks;
var cursors;

function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);

	game.add.sprite(0, 0, 'sky');

	streets = game.add.group();
	sidewalks = game.add.group();

	streets.enableBody = true;
	sidewalks.enableBody = true;

	var barstreet = streets.create(0, game.world.height - 34, 'street');
	barstreet.body.immovable = true;
	
	var centralstreet = streets.create(800, game.world.height - 34, 'street');
	centralstreet.body.immovable = true;
	
	var barsidewalk = sidewalks.create(0, game.world.height - 50, 'sidewalk');
	barsidewalk.body.immovable = true;
	
	var centralsidewalk = sidewalks.create(800, game.world.height - 50, 'sidewalk');
	centralsidewalk.body.immovable = true;
	
	bar = game.add.sprite(0, 0, 'bar');

	player = game.add.sprite(32, game.world.height - 200, 'vivian');

	game.physics.arcade.enable(player);

	player.body.bounce.y = 0;
	player.body.gravity.y = 800;
	player.body.collideWorldBounds = true;

	cursors = game.input.keyboard.createCursorKeys();
}

function update() {
	game.physics.arcade.collide(player, streets);

	if (cursors.left.isDown) {
		player.body.velocity.x = -150;
	}
	else if (cursors.right.isDown) {
		player.body.velocity.x = 150;
	}
	else {
		player.body.velocity.x = 0;
	}

	if (cursors.up.isDown && player.body.touching.down) {
		player.body.velocity.y = -350;
	}
}
