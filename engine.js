env = 'production';

var tempMapData = '{ \
"width": 28, \
"height": 28, \
"tileset": "default", \
"data": { \
	"accessible": [ \
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0], \
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0], \
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1], \
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1], \
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1], \
		[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1], \
		[0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1], \
		[0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1], \
		[0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1], \
		[0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1], \
		[0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1], \
		[0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1], \
		[0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1], \
		[0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1], \
		[0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1], \
		[0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1], \
		[0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1], \
		[1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1], \
		[1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1], \
		[1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0], \
		[1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0], \
		[1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0], \
		[1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0], \
		[1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0], \
		[0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0], \
		[0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0], \
		[1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0], \
		[0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0]  \
	], \
	"layout": [ \
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 1, 2, 2, 2, 2, 2, 2, 9,-1,-1,-1], \
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 1, 5, 8, 8, 8, 8, 8, 8, 8, 2, 9,-1], \
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9], \
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 1, 5, 8, 8, 8,14, 8, 8, 8, 8, 8, 8,16], \
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 0, 8, 8, 8,16,-1, 0, 8, 8, 8, 8, 8,16], \
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 1,18,18, 5,14, 8,14,16,-1, 0, 8, 8,14, 8, 8,16], \
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 1, 6,-1,-1,17,-1,17,-1,17,-1, 0, 8,16,-1, 0, 8,16], \
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 1, 6,-1,-1, 1, 6,-1,17,-1,17,-1, 0, 8,16,-1, 0, 8,16], \
		[-1,-1,-1,-1,-1,-1,-1,-1,-1, 1, 6,-1,-1, 1, 6,-1,-1,17,-1,17,-1, 0, 8,16,-1, 0, 8,16], \
		[-1,-1,-1,-1,-1,-1,-1,-1, 1, 6,-1,-1, 1, 6,-1,-1, 1, 6,-1,17,-1, 0, 8,16,-1, 0, 8,16], \
		[-1,-1,-1,-1,-1,-1,-1, 1, 6,-1,-1, 1, 6,-1,-1, 1, 6,-1,-1,17,-1, 0,14,16,-1, 0,14,16], \
		[-1,-1,-1,-1,-1,-1, 1, 6,-1,-1, 1, 6,-1,-1, 1, 6,-1,-1, 1, 6,-1,17,-1,17,-1,17,-1,17], \
		[-1,-1,-1,-1,-1, 1, 6,-1,-1, 1, 6,-1,-1, 1, 6,-1,-1, 1, 6,-1,-1,17,-1,17,-1,17,-1,17], \
		[-1,-1,-1,-1, 1, 6,-1,-1, 1, 6,-1,-1, 1, 6,-1,-1, 1, 6,-1,-1,-1,17,-1,17,-1,17,-1,17], \
		[-1,-1,-1, 1,16,-1,-1, 1,13,-1,-1, 1, 6,-1,-1, 1, 6,-1,-1,-1,-1,17,-1,17,-1,17,-1,17], \
		[-1,-1, 1,12,16,-1, 1,12,16,-1, 1, 6,-1,-1, 1, 6,-1,-1,-1,-1,-1,17,-1,17,-1,17,-1,17], \
		[-1, 1, 6,-1,17,-1,17,-1,17,-1,17,-1,-1, 1, 6,-1,-1, 1, 9,-1,-1, 0,18,13,-1, 0,18,13], \
		[ 1,13,-1,-1,17,-1, 0, 2, 5, 2,13,-1, 1, 6,-1,-1, 1, 5,16,-1,-1,17,-1, 0, 2,13,-1,17], \
		[ 0,16,-1,-1, 0, 2, 5, 8, 8, 8,16,-1,17,-1,-1, 1, 5, 8,16,-1,-1, 7, 2, 5, 8, 8, 2, 6], \
		[ 0,16,-1,-1, 0, 8, 8, 8, 8, 8, 8, 2, 5, 2, 2, 5, 8, 8,16,-1,-1,-1, 7, 8, 8, 8,15,-1], \
		[ 0,16,-1,-1, 0, 8, 8, 8, 8, 8, 8,14, 8, 8,14,14,14,14,16,-1,-1,-1,-1, 7,14,15,-1,-1], \
		[ 0,14,18,18, 5,14,14,14,14,14,15,-1, 0,16,-1,-1,-1,-1,17,-1,-1,-1,-1,-1,-1,-1,-1,-1], \
		[17,-1,-1,-1,17,-1,-1,-1,-1,-1,-1,-1, 0,15,-1,-1,-1, 1, 6,-1,-1,-1,-1,-1,-1,-1,-1,-1], \
		[10,-1, 1,18,12, 2, 9,-1,-1, 1, 2, 2,13,-1,-1,-1, 1, 6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1], \
		[-1,-1,17,-1,-1, 0,16,-1, 3, 5, 8,14,16,-1,-1, 1, 6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1], \
		[-1,-1, 0, 2, 2, 5,15,-1,-1, 0,16,-1,17,-1, 1, 6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1], \
		[ 3,18, 5, 8, 8,16,-1,-1,-1, 0,16,-1, 0, 2, 6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1], \
		[-1,-1, 7,14,14,14,18,18,18,12,14,18,12,15,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]  \
	] \
} \
}';
var Map = {
	initialize: function () {
		this.tw = Engine.sprite.w;
		this.th = Engine.sprite.h;
		this.td = Engine.sprite.d;

		this.scale = Engine.scale;
		this.isLoaded = false;
	},

	load: function(name) {
		console.log('Loading map "' + name + '".')
		this.mapData = JSON.parse(tempMapData);
		Utils.imagePreloader([this.mapData.tileset + '_tileset'], function(imageList) {
			Map.spriteList = new Sprite('tileset', imageList[Map.mapData.tileset + '_tileset'], 38, 28);

			Map.isLoaded = true;
			Map.draw();
		});

	},

	refresh: function () {
		this.tw = Engine.sprite.w;
		this.th = Engine.sprite.h + Engine.sprite.d;
		this.scale = Engine.scale;
	},

	draw: function() {
		if(this.isLoaded) {
			console.log('drawing');
			var _map = this;
			var scale = this.scale;



			var offset = this.tw * this.mapData.width/2,
				mapCanvas = cq(this.mapData.width * this.tw + this.tw/2, this.mapData.height * 2*this.th);
				//console.log('mapCanvas', mapCanvas, this, scale);

			//console.log(Map.spriteList);
			for(var i = 0; i < this.mapData.width; i++)
				for(var j = 0; j <  this.mapData.height; j++) {
					var x = j * this.tw/2 - i * (this.tw/2) + offset;
					var y = j * (this.th/2) + i * (this.th/2);
					if(this.mapData.data.accessible[i][j]) {
						//console.log( j + ':' + i + ' -> ' + this.mapData.data.layout[j][i]);
						//console.log(Map.spriteList[parseInt(this.mapData.data.layout[j][i])].toDataURL());
						mapCanvas.drawImage(Map.spriteList[this.mapData.data.layout[i][j]], 0, 0, this.tw, this.th + this.td, x, y, this.tw, this.th + this.td);
					}
				}

			//console.log(mapCanvas.canvas.toDataURL());
			this.canvas = mapCanvas.canvas;
		}
	}
}











var Server = {

	serviceURL: (env == 'production') ? 'http://service.thisismyasterisk.org:80' : 'http://localhost:4000',

	initialize: function(callback) {
		console.log('server init...');


		var head = document.getElementsByTagName('head')[0],
			script = document.createElement('script');

		script.type = 'text/javascript';
		script.onerror = function() {
			//throw new Error('can\'t find '+arr[iter]);
			console.log('failed to load script');
			Engine.label = '!!! can\'t connect to the server. It\'s probably down... you should let me know about that.';
		}
		script.onload = script.onreadystatechange = function() {
			callback();
		}
		script.src = this.serviceURL + '/socket.io/socket.io.js';
		head.appendChild(script);
	},

	resetUsersList: function() {
		this.socket.emit('reset_userlist', {});
	},

	connect: function (callback) {
		var _server = this;
		this.socket = io.connect(this.serviceURL);

		this.socket.on('connect', function () {
			var player = {
				uid: localStorage.getItem('asterisk.player.UID'),
				color: localStorage.getItem('asterisk.player.color') || '#'+((1<<24)*Math.random()|0).toString(16),
				position: JSON.parse(localStorage.getItem('asterisk.player.position')) || { x: 0, y: 26 }
			}
			console.log(player);
			_server.socket.emit('player_data', player);
			console.log('onConnect');
		});

		this.socket.on('player_join', function (data) {
			callback(data.playerUID, data.users);

		});

		this.socket.on('remove_user', function(data){
			console.log('removing user: ' + data);
			delete Engine.entitiesList[data];
		});

		this.socket.on('new_user_join', function (data) {
				new Engine.User('user', data.uid, data.position, data.color);
		});

		this.socket.on('update_user', function (data){
			console.log('User target: ' + data.target.x + ', ' + data.target.y);
			Engine.entitiesList[data.uid].setMoveTarget(data.target.x, data.target.y, true);
			//Engine.entitiesList[data.uid].position.raw = data.position;
		});

		this.socket.on('player_active_state', function (data) {
			Engine.entitiesList[data.uid].active = data.active;
			console.log(data.uid + ' ' + data.active);
		});

	},
	disconnect: function (message) {
		this.socket.emit('remove_user', {uid: Engine.player.uid, message: message});
	}
}






var Sprite = function(type, image, w, h) {
	// if(typeof image !== 'Image' || typeof image !== 'object') {
	// 	Logger.error('No proper image given!', typeof image);
	// 	return;
	// } else {
		var tileList = [];
		var sImageW = (image.width / w) |0;
		var sImageH = (image.height / h) |0;
		switch(type) {
			case 'tileset':
				for(var j = 0; j < sImageH; j++) {
					for(var i = 0; i < sImageW; i++) {
						var scw = cq(w, h);
						//scw.strokeRect(0, 0, w, h);
						scw.drawImage(image, i * w, j * h, w, h, 0, 0, w, h);
						//console.log(scw.canvas.toDataURL());
						tileList.push(scw.canvas);
					}
				}

			break;
			case 'item':

			break;
			case 'player':
				for(var j = 0; j < sImageH; j++) {
					tileList[j] = [];
					for(var i = 0; i < sImageW; i++) {
						var scw = cq(w, h);
						//scw.strokeRect(0, 0, w, h);
						scw.drawImage(image, i * w, j * h, w, h, 0, 0, w, h);
						//console.log(scw.canvas.toDataURL());
						tileList[j].push(scw.canvas);
					}
				}
			break;
		}

		//console.log(tileList);
		return tileList;
	// }
}









var User = function (userName, userId, spawnPosition, userColor) {
	//console.log(userName);
	this.opacty = 1;
	this.animationStep = 0;
	this.movePath = []
	this.active = true;
	this.name = userName;
	this.position = this.moveTarget = {
		x: spawnPosition.x,
		y: spawnPosition.y,
		raw: Engine.getScreenCoordinates(spawnPosition.x, spawnPosition.y)
	};
	this.speed = this.baseSpeed = 70;
	this.color = userColor;
	this.movingDirection = 0;
	this.uid = userId;
	this.moving = false;

	this.sprite = {
		w: 74,
		h: 68
	}

	this.spriteList = new Sprite('player', Engine.images['cube'], this.sprite.w, this.sprite.h);

	if(userName !== 'player') Engine.addEntity(this);

	//console.log(this);
	return this;
};

User.prototype = {

	setMoveTarget: function (x, y, remote) {
		remote = remote || false;
		console.log('setting move target to: ' + x + ', ' + y);
		if(remote || this.checkTileAvailability()) {

			this.moveTarget = Engine.getScreenCoordinates(x, y);
			this.movePath = Utils.aStar.searchPath({x:this.position.x, y:this.position.y}, {x:x, y:y}, Engine.Map.mapData.data.accessible);
			console.log(this.movePath);

			this.moveProggres = 0;

			var xDir = (this.movePath[this.moveProggres].x < this.movePath[this.moveProggres+1].x) ? '' : '-';
			var yDir = (this.movePath[this.moveProggres].y < this.movePath[this.moveProggres+1].y) ? '' : '-';

			this.movingDirection = (this.movePath[this.moveProggres].x != this.movePath[this.moveProggres+1].x) ? xDir + 'x' : yDir + 'y';
			// Server.socket.emit('update_player', {uid: this.uid, target: this.movePath[this.movePath.length - 1] });

			this.moving = true;

		}
	},

	checkTileAvailability: function() {
		if (Engine.cursorPosition.x >= 0 &&
	 		Engine.cursorPosition.y >= 0 &&
	 		Engine.cursorPosition.x < Engine.Map.mapData.width &&
	 		Engine.cursorPosition.y < Engine.Map.mapData.height &&
	 		(Engine.Map.mapData.data.accessible[Engine.cursorPosition.y][Engine.cursorPosition.x])) {
	 			return true;
		}
		return false;
	},

	render: function (ctx, delta, time) {
		var pos = this.position.raw;
		if(this.moving) {
			var direction;
			switch(this.movingDirection) {
				case 'x':
					direction = 3;
				break;
				case '-x':
					direction = 2;
				break;
				case 'y':
					direction = 0;
				break;
				case '-y':
					direction = 1;
				break;
			}
			ctx.globalAlpha(this.opacity).drawImage(this.spriteList[direction][Math.floor(this.animationStep)], pos.x - this.sprite.w/2, pos.y - this.sprite.h/2 - Engine.sprite.d - 4);
		} else {
			ctx.globalAlpha(this.opacity).drawImage(this.spriteList[0][0], pos.x - this.sprite.w/2, pos.y - this.sprite.h/2 - Engine.sprite.d - 4);
		}
		ctx.globalAlpha(1);
	},

	onStep: function (delta) {
		if(this.moving) {
			// console.log(delta, this.animationStep)

			this.animationStep += (0.5 * this.speed * delta / 1000);
			if(this.animationStep >= 9) {
				this.animationStep = 0;
				this.moveProggres++;
				if(this.moveProggres === this.movePath.length - 1) {
					this.moving = false;
					console.log('stop moving ' + this.moveProggres);
				} else {
					var xDir = (this.movePath[this.moveProggres].x < this.movePath[this.moveProggres+1].x) ? '' : '-';
					var yDir = (this.movePath[this.moveProggres].y < this.movePath[this.moveProggres+1].y) ? '' : '-';
					this.movingDirection = (this.movePath[this.moveProggres].x != this.movePath[this.moveProggres+1].x) ? xDir + 'x' : yDir + 'y';
				}
				this.position.x = this.movePath[this.moveProggres].x;
				this.position.y = this.movePath[this.moveProggres].y;
				this.position.raw = Engine.getScreenCoordinates(this.position.x, this.position.y);

				// if(this.movePath.length > 10) {
				// 	if(this.moveProggres < 5 /*&& this.speed < 95*/) {
				// 		this.speed += 15;
				// 	} else if(this.moveProggres > this.movePath.length - 3) {
				// 		this.speed -= 30;
				// 	}
				// }


				console.log(this.moveProggres + '/' + (this.movePath.length - 1) + ' ' + this.movingDirection + '  ' + this.position.x + ';' + this.position.y);
			}
		}

		this.opacity = (!this.active && !this.moving) ? 0.2 : 1;
	}
}












var activeTilesList = [
	[24, 19, '[24, 19] - Nice. Do it again.'],
	[17, 19, '[17, 19] - You are here.'],
	[0, 23, '[0, 23] - Go for the next one.'],
	[23, 2, '[23, 2] - This get\'s boring...'],
	[8, 24, '[8, 24] - ...']
];



var Engine = {
	renderWidth: 1090,
	renderHeight: 410,
	scale: 20,
	sprite: {
		w: 38,
		h: 28 -6,
		d: 6
	},
	label: '',
	entitiesList: {},
	time: 0,
	mapMove: false,
	mouseDownPos: {
		x: 0,
		y: 0
	},
	maxWidth: 1100,
	maxHeight: 420,

	worldOffset: {
		x: 0,
		y: -150
	},
	//'rgba(119,108,90, 0.3)'
	makeTile: function (image, x, y) {
		var tile = cq(this.sprite.w, this.sprite.h)
		//console.log(image);
		tile.drawImage(image, x, y, this.sprite.w, this.sprite.h, 0, 0, this.sprite.w, this.sprite.h);
		return tile.canvas;
	},

	initialize: function () {

		var _engine = this;
		this.User = User;
		this.renderCanvas = cq();
		this.Map = Map;
		this.buffer = cq(window.innerWidth, window.innerHeight);
		this.cursorPosition = {
			x: 0,
			y: 0
		}
		document.body.appendChild(this.renderCanvas.canvas);


		Utils.attachEvent(window, 'resize', this.resize);
		Utils.attachEvent(this.renderCanvas.canvas, 'touchend', function(event) {
			console.log('touchEnd')
			var touch = event.changedTouches[0]
			console.log(event)
			_engine.onMouseUp(touch.pageX, touch.pageY);
		});
		Map.initialize();

		this.Map.load('temp');

		this.devicePixelRatio = window.devicePixelRatio || 1,
    this.backingStoreRatio = context.webkitBackingStorePixelRatio ||
                             context.mozBackingStorePixelRatio ||
                             context.msBackingStorePixelRatio ||
                             context.oBackingStorePixelRatio ||
                             context.backingStorePixelRatio || 1,

    this.ratio = this.devicePixelRatio / this.backingStoreRatio;

		this.images = Utils.imagePreloader(['cube','mark_tiles'], function (imageList) {
			//_engine.Map.draw();
		//	console.log('loaded');
			_engine.resize();
			// Server.initialize(function () {
			// 	Server.connect(function (playerUID, users) {
					// console.log('server data %s', playerUID);
					// console.log(users);

					var _player = {
						uid: 'visitor',
						color: '#'+((1<<24)*Math.random()|0).toString(16),
						position: {
							x: 0,
							y: 26
						}
					} // users[playerUID];

					_engine.player = new User('player', _player.uid, _player.position, _player.color);
					//_engine.player.generateSprites();
					//console.log(_player);
					// Utils.attachEvent(window, 'blur', function (event) {
					// 	console.log('got Blur event');
					// 	_engine.player.active = false;
					// 	Server.socket.emit('player_active_state', {
					// 		uid: _engine.player.uid,
					// 		active: _engine.player.active
					// 	});
					// });

					// Utils.attachEvent(window, 'focus', function (event) {
					// 	console.log('got Focus event');
					// 	_engine.player.active = true;
					// 	Server.socket.emit('player_active_state', {
					// 		uid: _engine.player.uid,
					// 		active: _engine.player.active
					// 	});
					// });
					_engine.cursorTile = _engine.makeTile(imageList['mark_tiles'], 0, 0);
					_engine.pathTile = _engine.makeTile(imageList['mark_tiles'], 38, 0);
					_engine.activeTile = _engine.makeTile(imageList['mark_tiles'], 76, 0);
					// setInterval(function() {
					// 	console.log(Engine.player.position.raw);
					// }, 1000);
					// Utils.attachEvent(document, 'beforeunload', function (event) {
					// 	event.preventDefault();
					// 	Logger.info('unload', event);
					// 	Server.disconnect('message text');
					// 	return 'fdsdfsdfsdgsdhs';
					// });
			// 	});
			// });
		});

		this.renderCanvas.onRender(function (delta) {
			_engine.onRender(_engine.buffer, delta);
		})/*.onStep(this.onStep.bind(this))*/
			.onMouseUp(this.onMouseUp.bind(this))
		  .onMouseDown(this.onMouseDown.bind(this))
			.onMouseMove(this.onMouseMove.bind(this));
	},

	onStep: function (delta) {
		// Engine.pathCanvas.clear();
		if(this.player) {
			this.player.onStep(delta);
			var pos = this.player.position;
			var pos = new Array(pos.x, pos.y);
			if(activeTilesList.exists(pos, true)) {
				this.label = activeTilesList[activeTilesList.exists(pos)][2];
				this.player.opacity = 0.5;
				//console.log('in place!');
			} else {
				this.label = '';
			}
		}
		if(Object.keys(this.entitiesList).length > 0) {
			for(var key in this.entitiesList) {
				this.entitiesList[key].onStep(delta);
				var pos = this.entitiesList[key].position;
				var pos = new Array(pos.x, pos.y);
				if(activeTilesList.exists(pos, true)) {
					this.entitiesList[key].opacity = 0.5;
				}
			}
		}
	},
	onMouseUp: function (x, y) {
		tmp = this.cursorPosition;
		this.player.setMoveTarget(tmp.x, tmp.y);
		console.log(tmp);
	},

	onMouseDown: function (x, y) {
		this.mouseDownPos = {
			x: x - this.worldOffset.x,
			y: y - this.worldOffset.y
		}
	},

	onMouseMove: function (x, y) {
		this.cursorPosition = this.getMapCoordinates(x, y);
	},

	//get tile iso position
	getMapCoordinates: function (x, y) {
		x = ((2 * (x - this.worldOffset.x) - Map.mapData.width * this.sprite.w) / this.sprite.w);
		y = (2 * (y - this.worldOffset.y)) / this.sprite.h ;

		var mx = Math.round((y + x) / 2) - 1;
		var my = Math.round((y - x) / 2);

		return {
			x: mx,
			y: my
		}
	},

	// get tile center offset
	getScreenCoordinates: function (x, y, raw) {
		var sx = this.worldOffset.x + ((x - y) * this.sprite.w/2 + this.sprite.w/2) + Map.mapData.width/2 * this.sprite.w;
		var sy = this.worldOffset.y + ((x + y) * this.sprite.h/2 + this.sprite.h/2);

		return {
			x: (raw) ? sx : sx | 0,
			y: (raw) ? sy : sy | 0
		}
	},

	addEntity: function (object) {
		this.entitiesList[object.uid] = object;
		console.log('Adding Entity: ' + object.name);
	},

	renderItems: function(ctx) {
		if(this.itemCanvas) {
			ctx.drawImage(this.itemCanvas.canvas, 0, 0);

		} else {
			console.log(activeTilesList);
			this.itemCanvas = cq(Map.canvas.width, Map.canvas.height);
			for (var i = 0; i < activeTilesList.length; i++) {
				var pos = this.getScreenCoordinates(activeTilesList[i][0], activeTilesList[i][1]);

				console.log(activeTilesList[i]);
				console.log(pos);
				this.itemCanvas.save()
					//.translate(, pos.y - (this.sprite.h)/2 )
					.drawImage(this.activeTile, pos.x - this.sprite.w/2, pos.y - (this.sprite.h)/2)
				.restore();
			}
			//console.log(this.itemCanvas.canvas.toDataURL());
		}
	},

	renderEntities: function(ctx) {
		for(var key in this.entitiesList) {
			var object = this.entitiesList[key];
			object.render(ctx);
		}
		if(this.player) this.player.render(ctx);
	},

	renderCursorTile: function (ctx) {
		if (this.cursorPosition.x >= 0 &&
		 		this.cursorPosition.y >= 0 &&
		 		this.cursorPosition.x < Map.mapData.width &&
		 		this.cursorPosition.y < Map.mapData.height) {
			if (this.Map.mapData.data.accessible[this.cursorPosition.y][this.cursorPosition.x]) {
				var cursor = this.getScreenCoordinates(this.cursorPosition.x, this.cursorPosition.y);
				ctx.save()
					.translate(cursor.x - this.sprite.w/2, cursor.y - (this.sprite.h)/2 )
					.drawImage(this.cursorTile, 0, 0)
				.restore();
			}
		}
	},

	onRender: function (ctx, delta) {

		ctx.clear();

		ctx.fillStyle('#30363c').fillRect(0, 0, this.renderCanvas.canvas.width, this.renderCanvas.canvas.height);

		if(Utils.isPreloaderWorking) {

			ctx.save();
			ctx.translate(50, this.canvas.height / 2 - 20);
			ctx.fillStyle('#fff');
			ctx.fillRect(0, 0, Utils.preloaderProgress * this.canvas.width - 50, 40);
			ctx.restore();

		} else if(Map.isLoaded) {

		 	ctx.save();

			ctx.drawImage(Map.canvas, this.worldOffset.x, this.worldOffset.y);
			if(this.pathCanvas) {
				ctx.drawImage(this.pathCanvas.canvas, this.worldOffset.x, this.worldOffset.y);
			}

			ctx.font("20pt Arial").fillStyle('#fff');
			if(this.player) {
				this.renderItems(ctx);

				this.renderCursorTile(ctx);

				this.renderEntities(ctx);

				// ctx.font("10pt Arial").fillText('[' + this.player.position.raw.x + ', ' + this.player.position.raw.y + ']', 20, 260);
				// ctx.font("10pt Arial").fillText('progress: ' + this.player.moveProggres, 20, 280);
				// ctx.font("10pt Arial").fillText('speed: ' + this.player.speed, 20, 300);
			}
			ctx.font("16pt Arial").fillText(this.label, 20, window.innerHeight - 20);
			ctx.restore();
			this.renderCanvas.drawImage(ctx.canvas, 0, 0);
			this.onStep(delta)
		}
	},

	resize: function (event) {
    if (Engine.devicePixelRatio !== Engine.backingStoreRatio) {

      var oldWidth = canvas.width;
      var oldHeight = canvas.height;

      Engine.renderCanvas.width = oldWidth * ratio;
      canvas.height = oldHeight * ratio;

      canvas.style.width = oldWidth + 'px';
      canvas.style.height = oldHeight + 'px';

      // now scale the context to counter
      // the fact that we've manually scaled
      // our canvas element
      context.scale(ratio, ratio);

    }
		Engine.renderCanvas.canvas.width = Engine.buffer.canvas.width = Math.max(window.innerWidth, Engine.maxWidth);
		Engine.renderCanvas.canvas.height = Engine.buffer.canvas.height = Math.max(window.innerHeight, Engine.maxHeight);
	}
}












Math.fact = function(m) {
	function f(n) {

		if (n === 0 || n === 1)
  		return 1;
		else
    return f(n-1)*n;
	}
	return f(m);
}

Math.newt = function(j, k) {
	if(j == 0 || j == k) return 1;
	return Math.fact(j) / (Math.fact(k) * Math.fact(j -1));
}

Array.prototype.exists = function(o, index) {
	index = !!index;
	for(var i = 0; i < this.length; i++)
		if(o instanceof Array) {
			if(this[i][0] === o[0] && this[i][1] === o[1]) {
				return (index) ? true : i;
			}
		} else {
			if(this[i] === o)
			return (index) ? true : i;
		}
	return false;
}

// Utilities
var Utils = {

	aStar: {
		/*
		Copyright (C) 2009 by Benjamin Hardin

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in
		all copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
		THE SOFTWARE.

		@modified for own purpoues

		*/
		searchPath: function (start, destination, board)
		{
			//Create start and destination as true nodes
			var allow_diagonals = false;//!!allow_diagonals;
			var columns = board.length;
			var rows = board[0].length;


			// console.log(JSON.stringify(Utils.transposeArray(board)));
			start = new this.node(start.x, start.y, -1, -1, -1, -1);
			destination = new this.node(destination.x, destination.y, -1, -1, -1, -1);
			board = Utils.transposeArray(board);
			//console.log(Utils.)
			var open = []; //List of open nodes (nodes to be inspected)
			var closed = []; //List of closed nodes (nodes we've already inspected)

			var g = 0; //Cost from start to current node
			var h = this.heuristic(start, destination); //Cost from current node to destination
			var f = g+h; //Cost from start to destination going through the current node

			//Push the start node onto the list of open nodes
			open.push(start);

			//Keep going while there's nodes in our open list
			while (open.length > 0)
			{
				//Find the best open node (lowest f value)

				//Alternately, you could simply keep the open list sorted by f value lowest to highest,
				//in which case you always use the first node
				var best_cost = open[0].f;
				var best_node = 0;

				for (var i = 1; i < open.length; i++)
				{
					if (open[i].f < best_cost)
					{
						best_cost = open[i].f;
						best_node = i;
					}
				}

				//Set it as our current node
				var current_node = open[best_node];

				//Check if we've reached our destination
				if (current_node.x == destination.x && current_node.y == destination.y)
				{
					var path = [destination]; //Initialize the path with the destination node

					//Go up the chain to recreate the path
					while (current_node.parent_index != -1)
					{
						current_node = closed[current_node.parent_index];
						path.unshift(current_node);
					}

					return path;
				}

				//Remove the current node from our open list
				open.splice(best_node, 1);

				//Push it onto the closed list
				closed.push(current_node);

				//Expand our current node (look in all 8 directions)
				for (var new_node_x = Math.max(0, current_node.x-1); new_node_x <= Math.min(columns-1, current_node.x+1); new_node_x++)
					for (var new_node_y = Math.max(0, current_node.y-1); new_node_y <= Math.min(rows-1, current_node.y+1); new_node_y++)
					{
						if (!allow_diagonals)
						{
							if (new_node_x != current_node.x && new_node_y != current_node.y)
								continue;
						}

						if (board[new_node_x][new_node_y] == 1 //If the new node is open
							|| (destination.x == new_node_x && destination.y == new_node_y)) //or the new node is our destination
						{
							//See if the node is already in our closed list. If so, skip it.
							var found_in_closed = false;
							for (var i in closed)
								if (closed[i].x == new_node_x && closed[i].y == new_node_y)
								{
									found_in_closed = true;
									break;
								}

							if (found_in_closed)
								continue;

							//See if the node is in our open list. If not, use it.
							var found_in_open = false;
							for (var i in open)
								if (open[i].x == new_node_x && open[i].y == new_node_y)
								{
									found_in_open = true;
									break;
								}

							if (!found_in_open)
							{
								var new_node = new this.node(new_node_x, new_node_y, closed.length-1, -1, -1, -1);

								new_node.g = current_node.g + Math.floor(Math.sqrt(Math.pow(new_node.x-current_node.x, 2)+Math.pow(new_node.y-current_node.y, 2)));
								new_node.h = this.heuristic(new_node, destination);
								new_node.f = new_node.g+new_node.h;

								open.push(new_node);
							}
						}
					}
			}

			return [];
		},

		//An A* heurisitic must be admissible, meaning it must never overestimate the distance to the goal.
		//In other words, it must either underestimate or return exactly the distance to the goal.
		heuristic: function (current_node, destination)
		{
			//Find the straight-line distance between the current node and the destination. (Thanks to id for the improvement)
			//return Math.floor(Math.sqrt(Math.pow(current_node.x-destination.x, 2)+Math.pow(current_node.y-destination.y, 2)));
			var x = current_node.x-destination.x;
			var y = current_node.y-destination.y;
			return x * x + y * y;
		},


		/* Each node will have six values:
		 X position
		 Y position
		 Index of the node's parent in the closed array
		 Cost from start to current node
		 Heuristic cost from current node to destination
		 Cost from start to destination going through the current node
		*/

		node: function (x, y, parent_index, g, h, f)
		{
			this.x = x;
			this.y = y;
			this.parent_index = parent_index;
			this.g = g;
			this.h = h;
			this.f = f;
		}
	},

	rotateArray: function(array, deg, direction) {
	    var temp = [];
	    var i, j;
	    for(i = 0; i < array.length; ++i){
	        temp[i] = [];
	        for (j = 0; j < array[i].length; ++j){
	            temp[i][j] = array[temp.length - j - 1][i];
	        }
	    }
	    return temp;
	},

	transposeArray: function(array) {


		var width = array.length ? array.length : 0,
				height = array[0] instanceof Array ? array[0].length : 0;

		if(height === 0 || width === 0) {
			return [];
		}

		var transposed = [];


		for(var i = 0; i < height; i++) {
			transposed[i] = [];
			for(var j = 0; j < width; j++) {
		  	transposed[i][j] = array[j][i];
			}
		}
		return transposed;
	},

	imagePreloader: function() {
		var imageList = {};
		var loadItems = 0;
		var loadItemsTotal = arguments[0].length;
		var callback = false;

		if(arguments[1] && typeof arguments[1] === 'function') {
			callback = arguments[1];
		}

		this.preloadProgress = 0;

		function addLoad(image, name) {
			console.log('Loading image: ' + name + '.');
			this.isPreloaderWorking = true;
			loadItems++;
			image.onload = loadReady;
			image.onerror = function() { debug.error('Failed to load ' + name); };
		}
		function loadReady () {
			loadItems--;
			this.preloadProgress = (loadItemsTotal - loadItems) / loadItemsTotal;
			if(!loadItems) {
				this.isPreloaderWorking = false;
				if(callback) {
					callback(imageList);
				}
			}
		}

		for(var i = 0; i < arguments[0].length; i++) {
			var imageName = arguments[0][i];
			var image = new Image;
			addLoad(image, imageName);
			image.src = imageName + '.png';
			imageList[imageName] = image;
		}

		return imageList;
	},

	bezierPosition: function (t, points) {
		var n = points.length || 0;
		var p = [];
		var position = {
			x: 0,
			y: 0
		};
		if (n == 3) {
			position.x = Math.pow(1 - t, 2) * points[0][0] + 2 * (1 - t) * t * points[1][0] + Math.pow(t, 2) * points[2][0];
			position.y = Math.pow(1 - t, 2) * points[0][1] + 2 * (1 - t) * t * points[1][1] + Math.pow(t, 2) * points[2][1];
		} else {
			console.error('3 points have to be specified.');
		}
		return position;
	},

	pointCompare: function(point1, point2, method) {
		method = method || 'exact';
		switch(method) {
			case 'int':
				if((point1.x | 0) != (point2.x | 0) || (point1.y | 0) != (point2.y | 0)) {
					return false;
				}
			break;
			case 'exact':
				if(point1.x != point2.x || point1.y != point2.y) {
					return false;
				}
			break;
		}
		return true;
	},

	attachEvent: function(eventElement, eventName, eventMethod) {
		console.log(this);
		if(typeof eventElement !== 'object') {
			console.error('Event element is not an object!');
			return;
		}
		if(typeof eventMethod === 'function') {
			if(eventElement.attachEvent) {
				eventElement.attachEvent('on' + eventName, eventMethod);
			} else if(window.addEventListener) {
				eventElement.addEventListener(eventName, eventMethod, true);
			} else {
				console.error('Unable to attach event "' + eventName + '" - no support for this. Get a real browser.');
				return;
			}
		} else {
			console.error('Event method is not a function!');
			return;
		}
		console.log('Attached [' + eventName + '] to ' + eventElement + '.');
	},

	detachEvent: function(eventElement, eventName, eventMethod) {
		if(typeof eventElement !== 'object') {
			console.error('Event element is not an object!');
			return;
		}
		if(typeof eventMethod === 'function') {
			if(eventElement.attachEvent) {
				eventElement.attachEvent('on' + eventName, eventMethod);
			} else if(window.addEventListener) {
				eventElement.addEventListener(eventName, eventMethod, true);
			} else {
				console.error('Unable to detach event "' + eventName + '" - no support for this. Get a real browser.');
				return;
			}
		} else {
			console.error('Event method is not a function!');
			return;
		}
		console.log('Detached [' + eventName + '] from ' + eventElement + '.');
	}
}
