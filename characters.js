//player model

function drawCharacterBase(characterX, characterY, leftLegHeight, rightLegHeight) {
    fill(0);
    rect(characterX - 22.5, characterY - 70, 45, 55);
    rect(characterX - 17.5, characterY - 15, 12.5, leftLegHeight);
    rect(characterX + 5.5, characterY - 15, 12.5, rightLegHeight);
    rect(characterX + 22.5, characterY - 40, 7.5, 17.5);
    rect(characterX - 30, characterY - 40, 7.5, 17.5);
}

function drawBelt(characterX, characterY) {
    fill(255, 0, 0);
    rect(characterX - 22.5, characterY - 30, 45, 5);
    rect(characterX - 5, characterY - 25, 10, 5);
    rect(characterX - 8, characterY - 20, 5, 5);
    rect(characterX + 3.5, characterY - 20, 5, 5);
}

function drawEyesFront(characterX, characterY) {
    fill(255, 180, 180);
    rect(characterX - 17.5, characterY - 60, 35, 10);
    fill(0);
    rect(characterX - 10, characterY - 60, 7.5, 7.5);
    rect(characterX + 5, characterY - 60, 7.5, 7.5);
    fill(255);
    rect(characterX - 6, characterY - 60, 4, 4);
    rect(characterX + 8, characterY - 60, 4, 4);
}

function drawEyesLeft(characterX, characterY) {
    fill(255, 180, 180);
    rect(characterX - 17.5, characterY - 60, 35, 10);
    fill(0);
    rect(characterX - 17.5, characterY - 60, 7.5, 7.5);
    rect(characterX - 2.5, characterY - 60, 7.5, 7.5);
    fill(255);
    rect(characterX - 18, characterY - 60, 4, 4);
    rect(characterX - 2.5, characterY - 60, 4, 4);
}

function drawEyesRight(characterX, characterY) {
    fill(255, 180, 180);
    rect(characterX - 17.5, characterY - 60, 35, 10);
    fill(0);
    rect(characterX - 5, characterY - 60, 7.5, 7.5);
    rect(characterX + 10, characterY - 60, 7.5, 7.5);
    fill(255);
    rect(characterX - 1, characterY - 60, 4, 4);
    rect(characterX + 13, characterY - 60, 4, 4);
}

function drawJumping(characterX, characterY) {
    drawCharacterBase(characterX, characterY, 7.5, 7.5);
    drawEyesFront(characterX, characterY);
    drawBelt(characterX, characterY);
}

function drawJumpingLeft(characterX, characterY) {
    drawCharacterBase(characterX, characterY, 15, 7.5);
    drawEyesLeft(characterX, characterY);
    drawBelt(characterX, characterY);
}

function drawJumpingRight(characterX, characterY) {
    drawCharacterBase(characterX, characterY, 7.5, 15);
    drawEyesRight(characterX, characterY);
    drawBelt(characterX, characterY);
}

function drawWalkingLeft(characterX, characterY) {
    drawCharacterBase(characterX, characterY, 7.5, 15);
    drawEyesLeft(characterX, characterY);
    drawBelt(characterX, characterY);
}

function drawWalkingRight(characterX, characterY) {
    drawCharacterBase(characterX, characterY, 15, 7.5);
    drawEyesRight(characterX, characterY);
    drawBelt(characterX, characterY);
}

function drawStanding(characterX, characterY) {
    drawCharacterBase(characterX, characterY, 15, 15);
    drawEyesFront(characterX, characterY);
    drawBelt(characterX, characterY);
}

function drawDead(characterX, characterY) {
    fill(0);
    rect(characterX - 22.5, characterY - 70, 45, 55);
    //eyes
    fill(255, 180, 180);
    rect(characterX - 17.5, characterY - 60, 35, 10);
    fill(0);
    rect(characterX - 10, characterY - 59.5, 3, 3);
    rect(characterX - 7, characterY - 56.5, 3, 3);
    rect(characterX - 10, characterY - 53.5, 3, 3);
    rect(characterX + 9, characterY - 59.5, 3, 3);
    rect(characterX + 6, characterY - 56.5, 3, 3);
    rect(characterX + 9, characterY - 53.5, 3, 3);
    drawBelt(characterX, characterY);
}


//enemy model
function drawEnemy(x, y) {
    stroke(0);
    // Body
    fill(180, 30, 30);
    rect(x - 18, y - 65, 36, 45);
    // Legs
    fill(120, 20, 20);
    rect(x - 14, y - 20, 10, 20);
    rect(x + 4, y - 20, 10, 20);
    // Arms
    fill(180, 30, 30);
    rect(x + 18, y - 55, 6, 14);
    rect(x - 24, y - 55, 6, 14);
    // Head band
    fill(220, 220, 50);
    rect(x - 18, y - 68, 36, 8);
    // Eyes
    fill(0);
    rect(x - 10, y - 62, 6, 5);
    rect(x + 4, y - 62, 6, 5);
    noStroke();
}