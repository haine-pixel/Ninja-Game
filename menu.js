// --- Button Hit Test ---
function mouseInButton(button) {
	return mouseX >= button.x && mouseX <= button.x + button.w &&
		mouseY >= button.y && mouseY <= button.y + button.h;
}


// --- Mouse Click ---
function mousePressed() {
	if (gameState === 'menu') {
		if (mouseInButton(startButton)) {
			userStartAudio().then(() => { buttonSelectSound.play(); gameState = 'playing'; });
		}
		if (mouseInButton(howToPlayButton)) {
			userStartAudio().then(() => { buttonSelectSound.play(); gameState = 'howToPlay'; });
		}
	} else if (gameState === 'howToPlay') {
		if (mouseInButton(backButton)) { buttonSelectSound.play(); gameState = 'menu'; }
	}
}


// --- Button ---
function drawButton(button, label) {
	let hovered = mouseInButton(button);
	fill(hovered ? color(200, 160, 40) : color(160, 110, 20));
	stroke(255, 215, 0);
	strokeWeight(2);
	rect(button.x, button.y, button.w, button.h, 8);
	fill(255);
	noStroke();
	textAlign(CENTER, CENTER);
	textFont(font);
	textSize(40);
	text(label, button.x + button.w / 2, button.y + button.h / 2);
}


// --- Main Menu ---
function drawMainMenu() {
	// sky
	background(210, 170, 110);
	noStroke();
	fill(181, 112, 84, 25); rect(0, 0, width, 325);
	fill(171, 87, 73, 25); rect(0, 0, width, 235);
	fill(164, 69, 65, 25); rect(0, 0, width, 165);
	fill(107, 24, 17, 35); rect(0, 0, width, 100);

	// mountains
	drawMountain(438, 120, 420, 180);
	drawMountain1(438, 70, 320, 580);
	drawMountain(438, 140, 380, 920);

	// clouds
	let cloud1X = (frameCount * 0.30 + 0) % (width + 200) - 100;
	let cloud2X = (frameCount * 0.20 + 400) % (width + 200) - 100;
	let cloud3X = (frameCount * 0.25 + 750) % (width + 200) - 100;
	drawCloud(cloud1X, 75, 70);
	drawCloud(cloud2X, 55, 55);
	drawCloud(cloud3X, 90, 65);

	// trees
	drawTree(80, 0.75);
	drawTree(330, 1.00);
	drawTree(680, 0.85);

	// ground
	noStroke();
	fill(115, 147, 53); rect(0, 432, width, 20);
	fill(105, 137, 48); rect(0, 440, width, 6);
	fill(95, 127, 43); rect(0, 446, width, 6);
	fill(81, 52, 33); rect(0, 452, width, 30);
	fill(71, 46, 28); rect(0, 482, width, 30);
	fill(61, 40, 23); rect(0, 512, width, 30);
	fill(51, 34, 18); rect(0, 542, width, 34);

	// tori gate
	drawToriOpen(880, 438);

	// dark overlay
	fill(0, 0, 0, 130);
	noStroke();
	rect(0, 0, width, height);

	// title
	textAlign(CENTER, CENTER);
	textFont(font);
	fill(255, 215, 0);
	textSize(130);
	text('Ninja Training', width / 2, 160);

	fill(220, 220, 220);
	textSize(40);
	text("A Ninja's Adventure", width / 2, 240);

	// buttons
	drawButton(startButton, 'Start');
	drawButton(howToPlayButton, 'How To Play');
}


// --- How To Play ---
function drawHowToPlay() {
	background(100, 160, 210);
	fill(0, 0, 0, 160);
	noStroke();
	rect(0, 0, width, height);

	textFont(font);

	// title
	textAlign(CENTER, TOP);
	fill(255, 215, 0);
	textSize(60);
	text('How To Play', width / 2, 30);

	let leftMargin = 80;
	let controlsSectionTop = 95;
	let lineHeight = 30;

	// controls header
	fill(255, 215, 0);
	textSize(38);
	textAlign(LEFT, TOP);
	text('Controls', leftMargin, controlsSectionTop);

	// controls list
	fill(255);
	textSize(32);
	let controlsTop = controlsSectionTop + 35;
	let descriptionColumn = leftMargin + 280;
	textAlign(LEFT, TOP);
	text('Left / Right Arrow', leftMargin, controlsTop);
	text('Up Arrow', leftMargin, controlsTop + lineHeight);
	text('Down Arrow', leftMargin, controlsTop + lineHeight * 2);
	text('Space', leftMargin, controlsTop + lineHeight * 3);
	text('X Key', leftMargin, controlsTop + lineHeight * 4);
	fill(255, 215, 0);
	text('-', descriptionColumn - 20, controlsTop);
	text('-', descriptionColumn - 20, controlsTop + lineHeight);
	text('-', descriptionColumn - 20, controlsTop + lineHeight * 2);
	text('-', descriptionColumn - 20, controlsTop + lineHeight * 3);
	text('-', descriptionColumn - 20, controlsTop + lineHeight * 4);
	fill(255);
	text('Move', descriptionColumn, controlsTop);
	text('Jump / Grab Rope / Enter Tori Gate', descriptionColumn, controlsTop + lineHeight);
	text('Climb Down Rope', descriptionColumn, controlsTop + lineHeight * 2);
	text('Throw Shuriken / Advance Screens', descriptionColumn, controlsTop + lineHeight * 3);
	text('Use Item / Release Balloon', descriptionColumn, controlsTop + lineHeight * 4);

	// rules header
	let rulesSectionTop = controlsTop + lineHeight * 5 + 20;
	fill(255, 215, 0);
	textSize(38);
	text('Rules', leftMargin, rulesSectionTop);

	// rules list
	fill(255);
	textSize(32);
	let rulesTop = rulesSectionTop + 35;
	text('- Defeat all enemies and collect all scrolls to unlock the Tori Gate', leftMargin, rulesTop);
	text('- Jump into the Tori Gate to complete the level', leftMargin, rulesTop + lineHeight);
	text('- Shoot boxes with your shuriken to reveal items', leftMargin, rulesTop + lineHeight * 2);
	text('- Falling into canyons or touching enemies / spikes costs a life', leftMargin, rulesTop + lineHeight * 3);

	// back button
	drawButton(backButton, 'Back');
}
