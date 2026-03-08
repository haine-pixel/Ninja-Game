// --- Player Model ---

function drawCharacterBase(characterX, characterY, leftLegHeight, rightLegHeight) {
    fill(0);
    rect(characterX - 22.5, characterY - 70, 45, 55);
    rect(characterX - 17.5, characterY - 15, 12.5, leftLegHeight);
    rect(characterX + 5.5, characterY - 15, 12.5, rightLegHeight);
    rect(characterX + 22.5, characterY - 40, 7.5, 17.5);
    rect(characterX - 30, characterY - 40, 7.5, 17.5);
}

// belt
function drawBelt(characterX, characterY) {
    fill(255, 0, 0);
    rect(characterX - 22.5, characterY - 30, 45, 5);
    rect(characterX - 5, characterY - 25, 10, 5);
    rect(characterX - 8, characterY - 20, 5, 5);
    rect(characterX + 3.5, characterY - 20, 5, 5);
}

// eyes front
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

// eyes left
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

// eyes right
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

// jumping
function drawJumping(characterX, characterY) {
    drawCharacterBase(characterX, characterY, 7.5, 7.5);
    drawEyesFront(characterX, characterY);
    drawBelt(characterX, characterY);
}

// jumping left
function drawJumpingLeft(characterX, characterY) {
    drawCharacterBase(characterX, characterY, 15, 7.5);
    drawEyesLeft(characterX, characterY);
    drawBelt(characterX, characterY);
}

// jumping right
function drawJumpingRight(characterX, characterY) {
    drawCharacterBase(characterX, characterY, 7.5, 15);
    drawEyesRight(characterX, characterY);
    drawBelt(characterX, characterY);
}

// walking left
function drawWalkingLeft(characterX, characterY) {
    drawCharacterBase(characterX, characterY, 7.5, 15);
    drawEyesLeft(characterX, characterY);
    drawBelt(characterX, characterY);
}

// walking right
function drawWalkingRight(characterX, characterY) {
    drawCharacterBase(characterX, characterY, 15, 7.5);
    drawEyesRight(characterX, characterY);
    drawBelt(characterX, characterY);
}

// standing
function drawStanding(characterX, characterY) {
    drawCharacterBase(characterX, characterY, 15, 15);
    drawEyesFront(characterX, characterY);
    drawBelt(characterX, characterY);
}

// dead
function drawDead(characterX, characterY) {
    fill(0);
    rect(characterX - 22.5, characterY - 70, 45, 55);
    // eyes
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


// --- Enemy Model ---
function drawEnemy(x, y) {
    // body fill
    noStroke();
    fill(88, 70, 175);
    rect(x - 10, y - 52, 20, 6);
    rect(x - 20, y - 46, 40, 6);
    rect(x - 27, y - 40, 54, 6);
    rect(x - 30, y - 34, 60, 6);
    rect(x - 30, y - 28, 60, 6);
    rect(x - 28, y - 22, 56, 6);
    rect(x - 22, y - 16, 44, 6);
    rect(x - 14, y - 10, 28, 6);
    rect(x - 6,  y - 4,  12, 4);

    // outline
    stroke(20, 12, 40);
    strokeWeight(2);
    noFill();
    beginShape();
    vertex(x - 10, y - 52);
    vertex(x + 10, y - 52);
    vertex(x + 10, y - 46);
    vertex(x + 20, y - 46);
    vertex(x + 20, y - 40);
    vertex(x + 27, y - 40);
    vertex(x + 27, y - 34);
    vertex(x + 30, y - 34);
    vertex(x + 30, y - 22);
    vertex(x + 28, y - 22);
    vertex(x + 28, y - 16);
    vertex(x + 22, y - 16);
    vertex(x + 22, y - 10);
    vertex(x + 14, y - 10);
    vertex(x + 14, y - 4);
    vertex(x + 6,  y - 4);
    vertex(x + 6,  y);
    vertex(x - 6,  y);
    vertex(x - 6,  y - 4);
    vertex(x - 14, y - 4);
    vertex(x - 14, y - 10);
    vertex(x - 22, y - 10);
    vertex(x - 22, y - 16);
    vertex(x - 28, y - 16);
    vertex(x - 28, y - 22);
    vertex(x - 30, y - 22);
    vertex(x - 30, y - 34);
    vertex(x - 27, y - 34);
    vertex(x - 27, y - 40);
    vertex(x - 20, y - 40);
    vertex(x - 20, y - 46);
    vertex(x - 10, y - 46);
    endShape(CLOSE);

    // sheen
    noStroke();
    fill(130, 115, 210, 140);
    rect(x - 20, y - 46, 10, 6);
    rect(x - 24, y - 40, 12, 6);
    rect(x - 26, y - 34, 10, 4);

    // antenna
    stroke(20, 12, 40);
    strokeWeight(3);
    line(x + 6,  y - 52, x + 12, y - 60);
    line(x + 12, y - 60, x + 18, y - 68);
    line(x + 18, y - 68, x + 16, y - 76);
    noStroke();
    fill(20, 12, 40);
    rect(x + 12, y - 82, 8, 8);

    // eye sockets
    fill(20, 12, 40);
    rect(x - 18, y - 42, 14, 12);
    rect(x + 4,  y - 42, 14, 12);

    // X eyes
    stroke(255);
    strokeWeight(2);
    line(x - 17, y - 41, x - 6,  y - 31);
    line(x - 6,  y - 41, x - 17, y - 31);
    line(x + 5,  y - 41, x + 16, y - 31);
    line(x + 16, y - 41, x + 5,  y - 31);

    // cheek highlights
    noStroke();
    fill(255, 255, 255, 200);
    rect(x - 27, y - 32, 6, 6);
    rect(x + 21, y - 32, 6, 6);

    // mouth
    fill(20, 12, 40);
    rect(x - 16, y - 26, 32, 14);

    // fangs
    fill(255);
    rect(x - 14, y - 26, 6, 8);
    rect(x - 3,  y - 26, 6, 8);
    rect(x + 8,  y - 26, 6, 8);

    strokeWeight(1);
    noStroke();
}
