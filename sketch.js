var CANYON_COLLISION_RANGE = 35;
var cloud;
var tree;
var mountain;
var canyon;
var torigate;
var shuriken;
var world;
var characterX;
var characterY;
var isLeft;
var isRight;
var isJumping;
var isPlummeting;
var steps;
var facingRight;
var speedX;
var speedY;
var maxJumpHeight;
var maxJumpDist;
var maxJumpY;
var maxJumpXLeft;
var maxJumpXRight;
var groundLevel;
var cameraPosX;
var gameover;
var welldone;
var game;
var isRestart;
var currentLevel;
var lives;
var invincibilityTimer;
var enemyList;
var boxList;
var plankList;
var inventory;
var balloonActive;
var balloonTimer;
var smokeBombActive;
var smokeBombTimer;
var scrollList;
var platformList;
var spikeList;
var ropeList;
var isClimbing;
var climbSpeed;
var ropeIndex;
var levelComplete;
var isLevelTransition;
var font;


function setup() {
	createCanvas(1024, 576);
	groundLevel = 438;
	cameraPosX = 0;
	characterX = 200;
	characterY = groundLevel;
	isLeft = false;
	isRight = false;
	isJumping = false;
	isPlummeting = false;
	steps = 0;
	facingRight = true;
	speedX = 7.5;
	speedY = 7.5;
	maxJumpHeight = 125;
	maxJumpDist = 125;
	isRestart = false;
	invincibilityTimer = 0;
	shuriken = { active: false, x: 0, y: 0, dir: 1, speed: 15 };
	inventory = [];
	balloonActive = false;
	balloonTimer = 0;
	smokeBombActive = false;
	smokeBombTimer = 0;
	isClimbing = false;
	climbSpeed = 3;
	ropeIndex = -1;
	gameover = {
		x: 512, y: 288,
		screenx: 1024, screeny: 576,
		status: false,
	};
	welldone = {
		x: 512, y: 288,
		screenx: 1024, screeny: 576,
		status: false,
	};
	game = {
		x: 512, y: 30,
		isComplete: false,
	};
	levelComplete = { status: false };
	if (!isLevelTransition) {
		currentLevel = 0;
		lives = 1;
	}
	isLevelTransition = false;
	loadLevel(currentLevel);
}

function keyPressed() {
	if (keyCode === 37) { isLeft = true; }
	if (keyCode === 39) { isRight = true; }

	if (keyCode === 38 && !isJumping && !isPlummeting && !isClimbing && !balloonActive) {
		let grabbedRope = false;
		for (let i = 0; i < ropeList.length; i++) {
			let rope = ropeList[i];
			if (abs(characterX - rope.x) < 30 && characterY >= rope.topY && characterY <= rope.bottomY) {
				isClimbing = true;
				ropeIndex = i;
				grabbedRope = true;
				break;
			}
		}
		if (!grabbedRope) {
			if (game.isComplete && characterX > torigate.x - 100 && characterX < torigate.x + 100) {
				if (currentLevel < levels.length - 1) {
					levelComplete.status = true;
				} else {
					welldone.status = true;
				}
			} else {
				isJumping = true;
				jumpSound.play();
				maxJumpY = characterY - maxJumpHeight;
				maxJumpXLeft = characterX - maxJumpDist;
				maxJumpXRight = characterX + maxJumpDist;
			}
		}
	}

	if (keyCode === 32) {
		if (levelComplete.status) {
			currentLevel++;
			isLevelTransition = true;
			transitionSound.play();
			setup();
		} else if (gameover.status || welldone.status) {
			isRestart = true;
		} else {
			fireShuriken();
		}
	}

	if (keyCode === 88) {
		if (balloonActive) {
			balloonActive = false;
			isPlummeting = true;
		} else if (inventory.length > 0) {
			useItem(inventory[0]);
			inventory.splice(0, 1);
		}
	}
}

function keyReleased() {
	if (keyCode === 37) { steps = 0; isLeft = false; }
	else if (keyCode === 39) { steps = 0; isRight = false; }
	else if (keyCode === 38) { if (!isClimbing) { isJumping = false; isPlummeting = true; } }
}

function fireShuriken() {
	if (!shuriken.active) {
		shuriken.active = true;
		shuriken.x = characterX;
		shuriken.y = characterY - 40;
		shuriken.dir = facingRight ? 1 : -1;
		shurikenSound.play();
	}
}


function useItem(type) {
	if (type === 'plank') {
		let targetCanyonX = null;
		for (let i = 0; i < canyon.x.length; i++) {
			if (facingRight && canyon.x[i] > characterX) {
				if (targetCanyonX === null || canyon.x[i] < targetCanyonX) { targetCanyonX = canyon.x[i]; }
			} else if (!facingRight && canyon.x[i] < characterX) {
				if (targetCanyonX === null || canyon.x[i] > targetCanyonX) { targetCanyonX = canyon.x[i]; }
			}
		}
		if (targetCanyonX !== null) {
			let alreadyBridged = plankList.some(p => p.canyonX === targetCanyonX);
			if (!alreadyBridged) {
				plankList.push({ canyonX: targetCanyonX });
				plankSound.play();
			}
		}
	} else if (type === 'balloon') {
		balloonActive = true;
		balloonTimer = 180;
		isJumping = false;
		balloonSound.play();
	} else if (type === 'smokebomb') {
		smokeBombActive = true;
		smokeBombTimer = 120;
		bombSound.play();
	}
}


function isOnPlatform() {
	for (let i = 0; i < platformList.length; i++) {
		let p = platformList[i];
		if (characterY === p.y && characterX >= p.x && characterX <= p.x + p.width) {
			return true;
		}
	}
	return false;
}


function draw() {

	cameraPosX = characterX - width / 2;
	cameraPosX = constrain(cameraPosX, 0, world.x - width);

	drawBackground(cloud, mountain, tree, torigate, world, platformList, canyon);


	for (let i = 0; i < plankList.length; i++) {
		drawPlankBridge(plankList[i].canyonX, groundLevel);
	}

	for (let i = 0; i < ropeList.length; i++) {
		let rope = ropeList[i];
		drawRope(rope.x, rope.topY, rope.bottomY);
	}

	for (let i = 0; i < spikeList.length; i++) {
		let spike = spikeList[i];
		drawSpike(spike.x, spike.y);
		if (invincibilityTimer === 0 && dist(characterX, characterY, spike.x, spike.y) < 30) {
			lives -= 1;
			playerDamageSound.play();
			invincibilityTimer = 60;
			if (lives <= 0) {
				gameover.status = true;
			}
		}
	}


	for (let i = 0; i < boxList.length; i++) {
		let box = boxList[i];
		if (box.isIntact) {
			drawBox(box.x, box.y);
		} else if (!box.collected) {
			drawPowerUpItem(box.x, box.y, box.powerUp);
			if (dist(characterX, characterY, box.x, box.y) < 35) {
				if (box.powerUp === 'heart') {
					lives += 1;
					box.collected = true;
					pickUpSound.play();
				} else if (inventory.length < 3) {
					inventory.push(box.powerUp);
					box.collected = true;
					pickUpSound.play();
				}
			}
		}
	}


	for (let i = 0; i < scrollList.length; i++) {
		let scroll = scrollList[i];
		if (!scroll.collected) {
			drawScroll(scroll.x, scroll.y);
			if (dist(characterX, characterY, scroll.x, scroll.y) < 35) {
				scroll.collected = true;
				pickUpSound.play();
			}
		}
	}


	for (let i = 0; i < enemyList.length; i++) {
		let enemy = enemyList[i];
		if (!enemy.isAlive) { continue; }

		if (!smokeBombActive) {
			enemy.x += enemy.speed * enemy.dir;
			if (enemy.x >= enemy.maxX) { enemy.dir = -1; }
			if (enemy.x <= enemy.minX) { enemy.dir = 1; }
		}
		drawEnemy(enemy.x, enemy.y);

		if (invincibilityTimer === 0 && dist(characterX, characterY, enemy.x, enemy.y) < 45) {
			lives -= 1;
			playerDamageSound.play();
			invincibilityTimer = 120;
			if (lives <= 0) {
				gameover.status = true;
			}
		}
	}


	if (invincibilityTimer > 0) {
		invincibilityTimer--;
	}


	let allDefeated = enemyList.every(enemy => !enemy.isAlive);
	let allScrollsCollected = scrollList.every(sc => sc.collected);
	if (allDefeated && allScrollsCollected) {
		game.isComplete = true;
	}

	if (shuriken.active) {
		shuriken.x += shuriken.speed * shuriken.dir;
		drawShuriken(shuriken.x, shuriken.y);


		for (let i = 0; i < enemyList.length; i++) {
			if (enemyList[i].isAlive && dist(shuriken.x, shuriken.y, enemyList[i].x, enemyList[i].y - 35) < 30) {
				enemyList[i].isAlive = false;
				enemySound.play();
				shuriken.active = false;
				break;
			}
		}

		for (let i = 0; i < boxList.length; i++) {
			if (boxList[i].isIntact && dist(shuriken.x, shuriken.y, boxList[i].x, boxList[i].y - 20) < 30) {
				boxList[i].isIntact = false;
				boxSound.play();
				shuriken.active = false;
				break;
			}
		}

		if (shuriken.x < 0 || shuriken.x > world.x) {
			shuriken.active = false;
		}
	}

	if (balloonActive) {
		characterY -= 1.5;
		characterY = max(characterY, 50);
		balloonTimer--;
		if (balloonTimer <= 0) {
			balloonActive = false;
			isPlummeting = true;
		}
	}

	if (smokeBombActive) {
		smokeBombTimer--;
		if (smokeBombTimer <= 0) {
			smokeBombActive = false;
		}
	}


	if (!gameover.status) {

		if (isClimbing && ropeIndex >= 0) {
			let rope = ropeList[ropeIndex];
			characterX = rope.x;
			if (keyIsDown(38)) {
				characterY -= climbSpeed;
			}
			if (keyIsDown(40)) {
				characterY += climbSpeed;
			}
			characterY = constrain(characterY, rope.topY, rope.bottomY);
			if (isLeft || isRight) {
				isClimbing = false;
				ropeIndex = -1;
				isPlummeting = true;
			}
			if (characterY <= rope.topY) {
				isClimbing = false;
				ropeIndex = -1;
				characterY = rope.topY;
			}
			drawStanding(characterX, characterY);
		} else {

			if (isLeft && isJumping) {
				facingRight = false;
				if (characterX > 30) {
					characterX -= speedX;
					characterY -= speedY;
					characterY = max(characterY, maxJumpY);
					characterX = max(characterX, maxJumpXLeft);
					drawJumpingLeft(characterX, characterY);
					if (characterY <= maxJumpY) {
						isJumping = false;
						isPlummeting = true;
					}
				} else {
					isLeft = false;
				}
			}

			else if (isRight && isJumping) {
				facingRight = true;
				if (characterX < world.x - 30) {
					characterX += speedX;
					characterY -= speedY;
					characterY = max(characterY, maxJumpY);
					characterX = min(characterX, maxJumpXRight);
					if (characterY <= maxJumpY || characterX >= maxJumpXRight) {
						isJumping = false;
						isPlummeting = true;
					}
					drawJumpingRight(characterX, characterY);
				} else {
					isRight = false;
				}
			}

			else if (isLeft && !isPlummeting) {
				facingRight = false;
				if (characterX > 30) {
					steps += 1;
					characterX -= speedX;
					if (characterY < groundLevel && !balloonActive && !isOnPlatform()) {
						isPlummeting = true;
					}
					if (steps % 50 < 25) {
						drawWalkingLeft(characterX, characterY);
					}
					else {
						drawJumpingLeft(characterX, characterY);
					}
				} else { isLeft = false; }
			}

			else if (isRight && !isPlummeting) {
				facingRight = true;
				if (characterX < world.x - 30) {
					steps += 1;
					characterX += speedX;
					if (characterY < groundLevel && !balloonActive && !isOnPlatform()) {
						isPlummeting = true;
					}
					if (steps % 50 < 25) {
						drawWalkingRight(characterX, characterY);
					}
					else {
						drawJumpingRight(characterX, characterY);
					}
				} else { isRight = false; }
			}

			else if (isJumping || isPlummeting) {
				if (isJumping) {
					characterY -= speedY;
					characterY = max(characterY, maxJumpY);
					drawJumping(characterX, characterY);
					if (characterY <= maxJumpY) {
						isJumping = false;
						isPlummeting = true;
					}
				} else if (isPlummeting && balloonActive) {
					drawStanding(characterX, characterY);
				} else if (isPlummeting && !balloonActive) {
					if (isRight && characterX < world.x - 30) {
						characterX += speedX;
						steps += 1;
					} else if (isLeft && characterX > 30) {
						characterX -= speedX;
						steps += 1;
					}

					let initialY = characterY;
					characterY += speedY;

					let landedOnPlatform = false;
					for (let i = 0; i < platformList.length; i++) {
						let platform = platformList[i];
						if (characterX >= platform.x && characterX <= platform.x + platform.width) {
							if (initialY <= platform.y && characterY >= platform.y) {
								characterY = platform.y;
								isPlummeting = false;
								drawStanding(characterX, characterY);
								landedOnPlatform = true;
								break;
							}
						}
					}

					if (!landedOnPlatform) {
						let isOverCanyon = false;
						for (let i = 0; i < canyon.x.length; i++) {
							let havePlank = plankList.some(plank => plank.canyonX === canyon.x[i]);
							if (!havePlank &&
								characterX > canyon.x[i] - CANYON_COLLISION_RANGE &&
								characterX < canyon.x[i] + CANYON_COLLISION_RANGE) {
								isOverCanyon = true;
								break;
							}
						}

						if (characterY >= groundLevel && !isOverCanyon) {
							characterY = groundLevel;
							drawStanding(characterX, characterY);
							isPlummeting = false;
						} else {
							if (isOverCanyon && initialY <= groundLevel && characterY > groundLevel) {
								deathSound.play();
							}
							characterY = min(characterY, groundLevel + 250);
							if (characterY >= groundLevel + 20) {
								drawDead(characterX, characterY);
							}
							else {
								drawStanding(characterX, characterY);
							}
							if (characterY === groundLevel + 250) {
								lives -= 1;
								if (lives <= 0) {
									gameover.status = true;
								}
								else {
									characterX = 200;
									characterY = groundLevel;
									isPlummeting = false;
									invincibilityTimer = 60;
								}
							}
						}
					}
				}
			}
			else {
				drawStanding(characterX, characterY);
			}

		}
	}

	pop();

	noStroke();
	fill(107, 24, 17, 45);
	rect(0, 0, width, height);


	fill(220, 50, 50);
	textAlign(LEFT);
	textSize(36);
	textFont(font);
	noStroke();
	let heartsStr = '';
	for (let h = 0; h < lives; h++) { heartsStr += '♥ '; }
	text('Lives: ' + heartsStr, 20, 42);

	textAlign(RIGHT);
	textSize(36);
	fill(0);
	if (balloonActive) {
		text('Balloon: ' + ceil(balloonTimer / 60) + 's', 1004, 42);
	}
	if (smokeBombActive) {
		text('Smoke: ' + ceil(smokeBombTimer / 60) + 's', 1004, 82);
	}


	drawInventoryHUD(inventory);

	textAlign(CENTER);
	textSize(38);
	textFont(font);
	if (game.isComplete) {
		fill(255, 215, 0);
		text('All Enemies Defeated! All Scrolls Collected!', game.x, game.y + 28);
		text('Jump Into The Tori Gate To Complete Your Training', game.x, game.y + 70);
	} else {
		let scrollsLeft = scrollList.filter(sc => !sc.collected).length;
		let enemiesLeft = enemyList.filter(e => e.isAlive).length;
		fill(255, 255, 255);
		text('Level ' + (currentLevel + 1) + '   Scrolls: ' + (scrollList.length - scrollsLeft) + '/' + scrollList.length +
			'   Enemies: ' + (enemyList.length - enemiesLeft) + '/' + enemyList.length, game.x, game.y + 36);
	}

	if (gameover.status) {
		fill(0, 0, 0, 200);
		rect(0, 0, gameover.screenx, gameover.screeny);
		fill(247, 5, 5);
		textFont(font);
		textAlign(CENTER);
		textSize(170);
		text('GAME OVER', gameover.x, gameover.y);
		textSize(28);
		text('Press SPACE To Restart', gameover.x, gameover.y + 45);
	}


	if (welldone.status) {
		fill(0, 0, 0, 200);
		rect(0, 0, welldone.screenx, welldone.screeny);
		fill(50, 205, 50);
		textFont(font);
		textAlign(CENTER);
		textSize(130);
		text('WELL DONE!', welldone.x, welldone.y - 40);
		textSize(40);
		text('You Have Completed Your Ninja Training!', welldone.x, welldone.y);
		textSize(28);
		text('Press SPACE To Restart', welldone.x, welldone.y + 45);
	}


	if (levelComplete.status) {
		fill(0, 0, 0, 200);
		rect(0, 0, 1024, 576);
		fill(255, 215, 0);
		textFont(font);
		textAlign(CENTER);
		textSize(110);
		text('LEVEL ' + (currentLevel + 1) + ' COMPLETE!', 512, 260);
		textSize(28);
		fill(255);
		text('Press SPACE to continue', 512, 340);
	}

	if ((gameover.status || welldone.status) && isRestart) {
		setup();
	}
}
