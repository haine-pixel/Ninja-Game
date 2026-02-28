function drawMountain(mountainBase, mountainHeight, mountainWidth, mountainX) {
    stroke(0);
    fill(84, 125, 137);
    triangle(mountainX, mountainHeight, mountainX - (mountainWidth / 2), mountainBase, mountainX + (mountainWidth / 2), mountainBase);

    // mountain shadow
    noStroke();
    fill(72, 104, 119);
    triangle(mountainX, mountainHeight, mountainX, mountainBase, mountainX + (mountainWidth / 2), mountainBase);

    fill(140, 175, 206);
    stroke(0);
    beginShape();
    vertex(mountainX, mountainHeight);
    vertex(mountainX + (mountainWidth * .14), mountainHeight + ((mountainBase - mountainHeight) * .275));
    vertex(mountainX + (mountainWidth * 0.072), mountainHeight + ((mountainBase - mountainHeight) * .25));
    vertex(mountainX + (mountainWidth * .04), mountainHeight + ((mountainBase - mountainHeight) * .34));
    vertex(mountainX, mountainHeight + ((mountainBase - mountainHeight) * .305));
    endShape();

    fill(237, 240, 244);
    stroke(0);
    beginShape();
    vertex(mountainX, mountainHeight);
    vertex(mountainX - (mountainWidth * .157), mountainHeight + ((mountainBase - mountainHeight) * .31));
    vertex(mountainX - (mountainWidth * .083), mountainHeight + ((mountainBase - mountainHeight) * .28));
    vertex(mountainX - (mountainWidth * .043), mountainHeight + ((mountainBase - mountainHeight) * .33));
    vertex(mountainX, mountainHeight + ((mountainBase - mountainHeight) * .305));
    endShape();
}

function drawMountain1(mountainBase, mountainHeight, mountainWidth, mountainX) {
    stroke(0);
    fill(84, 125, 137);
    triangle(mountainX, mountainHeight, mountainX - (mountainWidth / 2), mountainBase, mountainX + (mountainWidth / 2), mountainBase);

    // mountain shadow
    noStroke();
    fill(72, 104, 119);
    triangle(mountainX, mountainHeight, mountainX, mountainBase, mountainX + (mountainWidth / 2), mountainBase);

    fill(140, 175, 206);
    stroke(0);
    beginShape();
    vertex(mountainX, mountainHeight);
    vertex(mountainX + (mountainWidth * 0.148), mountainHeight + ((mountainBase - mountainHeight) * 0.292));
    vertex(mountainX + (mountainWidth * .07), mountainHeight + ((mountainBase - mountainHeight) * 0.24));
    vertex(mountainX, mountainHeight + ((mountainBase - mountainHeight) * 0.268));
    endShape();

    fill(237, 240, 244);
    beginShape();
    vertex(mountainX, mountainHeight);
    vertex(mountainX - (mountainWidth * 0.14), mountainHeight + ((mountainBase - mountainHeight) * 0.28));
    vertex(mountainX - (mountainWidth * 0.064), mountainHeight + ((mountainBase - mountainHeight) * 0.248));
    vertex(mountainX, mountainHeight + ((mountainBase - mountainHeight) * 0.268));
    endShape();
}

function drawCanyon(x, y) {
    noStroke();
    fill(25, 20, 30);
    beginShape();
    vertex(x - 100, y + 145);
    vertex(x - 85, y + 130);
    vertex(x - 85, y + 85);
    vertex(x - 70, y + 75);
    vertex(x - 70, y + 45);
    vertex(x - 50, y + 35);
    vertex(x - 50, y + 5);
    vertex(x - 30, y);

    vertex(x + 30, y);
    vertex(x + 50, y + 5);
    vertex(x + 50, y + 35);
    vertex(x + 70, y + 45);
    vertex(x + 70, y + 75);
    vertex(x + 85, y + 85);
    vertex(x + 85, y + 130);
    vertex(x + 100, y + 145);
    endShape()

    //highlight
    fill(45, 35, 50);
    beginShape();
    vertex(x - 100, y + 145);
    vertex(x - 85, y + 130);
    vertex(x - 85, y + 85);
    vertex(x - 70, y + 75);
    vertex(x - 70, y + 45);
    vertex(x - 50, y + 35);
    vertex(x - 50, y + 5);
    vertex(x - 30, y);
    vertex(x - 40, y + 5);
    vertex(x - 40, y + 35);
    vertex(x - 60, y + 45);
    vertex(x - 60, y + 75);
    vertex(x - 75, y + 85);
    vertex(x - 75, y + 130);
    vertex(x - 90, y + 142);
    endShape()

    //shadow
    fill(15, 12, 20);
    beginShape();
    vertex(x + 30, y);
    vertex(x + 50, y + 5);
    vertex(x + 50, y + 35);
    vertex(x + 70, y + 45);
    vertex(x + 70, y + 75);
    vertex(x + 85, y + 85);
    vertex(x + 85, y + 130);
    vertex(x + 100, y + 145);
    vertex(x + 90, y + 142);
    vertex(x + 75, y + 130);
    vertex(x + 75, y + 85);
    vertex(x + 60, y + 75);
    vertex(x + 60, y + 45);
    vertex(x + 40, y + 35);
    vertex(x + 40, y + 5);
    endShape()

}

function drawCloud(cloudX, cloudY, cloudDiameter) {
    noStroke();
    fill(255);
    ellipse(cloudX, cloudY, cloudDiameter + 15);
    ellipse(cloudX + 30, cloudY, cloudDiameter);
    ellipse(cloudX - 30, cloudY, cloudDiameter);
}

function drawTree(treeX, treeScale) {
    stroke(0);
    fill(159, 98, 65);
    rect(treeX - (20 * treeScale),
        438 - (130 * treeScale),
        40 * treeScale,
        127 * treeScale);
    fill(237, 195, 154);
    rect(treeX - (20 * treeScale),
        438 - (130 * treeScale),
        2 * treeScale,
        127 * treeScale);
    fill(121, 69, 43);
    rect(treeX + (10 * treeScale),
        438 - (130 * treeScale),
        5 * treeScale,
        127 * treeScale);
    fill(91, 46, 31);
    rect(treeX + (15 * treeScale),
        438 - (130 * treeScale),
        5 * treeScale,
        127 * treeScale);

    //top
    fill(47, 82, 30);
    ellipse(treeX, 438 - (315 * treeScale), 100 * treeScale);
    noStroke();
    fill(115, 147, 53);
    ellipse(treeX - (5 * treeScale), 438 - (320 * treeScale), 85 * treeScale);
    fill(202, 213, 81);
    ellipse(treeX - (6 * treeScale), 438 - (325 * treeScale), 70 * treeScale);
    fill(240, 245, 110);
    ellipse(treeX - (15 * treeScale), 438 - (330 * treeScale), 45 * treeScale);

    //centre left
    stroke(0);
    fill(47, 82, 30);
    ellipse(treeX - (34 * treeScale), 438 - (250 * treeScale), 100 * treeScale);
    noStroke();
    fill(115, 147, 53);
    ellipse(treeX - (39 * treeScale), 438 - (255 * treeScale), 80 * treeScale);
    fill(202, 213, 81);
    ellipse(treeX - (44 * treeScale), 438 - (260 * treeScale), 60 * treeScale);
    fill(240, 245, 110);
    ellipse(treeX - (49 * treeScale), 438 - (265 * treeScale), 40 * treeScale);

    //centre right
    stroke(0);
    fill(47, 82, 30);
    ellipse(treeX + (45 * treeScale), 438 - (250 * treeScale), 100 * treeScale);
    noStroke();
    fill(115, 147, 53);
    ellipse(treeX + (40 * treeScale), 438 - (255 * treeScale), 80 * treeScale);
    fill(202, 213, 81);
    ellipse(treeX + (35 * treeScale), 438 - (260 * treeScale), 60 * treeScale);
    fill(240, 245, 110);
    ellipse(treeX + (30 * treeScale), 438 - (265 * treeScale), 40 * treeScale);


    //bottom left
    stroke(0);
    fill(47, 82, 30);
    ellipse(treeX - (70 * treeScale), 438 - (180 * treeScale), 90 * treeScale);
    noStroke();
    fill(115, 147, 53);
    ellipse(treeX - (75 * treeScale), 438 - (185 * treeScale), 70 * treeScale);
    fill(202, 213, 81);
    ellipse(treeX - (80 * treeScale), 438 - (190 * treeScale), 55 * treeScale);
    fill(240, 245, 110);
    ellipse(treeX - (85 * treeScale), 438 - (195 * treeScale), 35 * treeScale);

    //bottom centre
    stroke(0);
    fill(47, 82, 30);
    ellipse(treeX, 438 - (165 * treeScale), 115 * treeScale);
    noStroke();
    fill(115, 147, 53);
    ellipse(treeX - (5 * treeScale), 438 - (170 * treeScale), 95 * treeScale);
    fill(202, 213, 81);
    ellipse(treeX - (10 * treeScale), 438 - (172.5 * treeScale), 80 * treeScale);
    fill(240, 245, 110);
    ellipse(treeX - (15 * treeScale), 438 - (177.5 * treeScale), 60 * treeScale);

    //bottom right
    stroke(0);
    fill(47, 82, 30);
    ellipse(treeX + (75 * treeScale), 438 - (180 * treeScale), 90 * treeScale);
    noStroke();
    fill(115, 147, 53);
    ellipse(treeX + (72.5 * treeScale), 438 - (185 * treeScale), 75 * treeScale);
    fill(202, 213, 81);
    ellipse(treeX + (67.5 * treeScale), 438 - (185 * treeScale), 65 * treeScale);
    fill(240, 245, 110);
    ellipse(treeX + (62.5 * treeScale), 438 - (190 * treeScale), 45 * treeScale);
}

function drawToriClose(x, y) {
    drawToriOpen(x, y);
    //Door
    fill(120, 30, 20);
    rect(x - 47, y - 104, 47, 104);
    rect(x, y - 104, 47, 104);
    // Door panels
    fill(166, 40, 34);
    rect(x - 43, y - 102, 38, 100);
    rect(x + 5, y - 102, 38, 100);
    // Door handles
    fill(255, 215, 0);
    rect(x - 7, y - 64, 4, 11);
    rect(x + 3, y - 64, 4, 11);
}

function drawToriOpen(x, y) {
    stroke(0);
    // Base platforms
    fill(0);
    rect(x - 60, y - 18, 17, 18);
    rect(x + 43, y - 18, 17, 18);
    // Lower horizontal beam
    fill(166, 40, 34);
    rect(x - 79, y - 114, 158, 10);
    // Main pillars
    fill(166, 40, 34);
    rect(x - 60, y - 134, 13, 116);
    rect(x + 47, y - 134, 13, 116);
    fill(166, 40, 34);
    rect(x - 7, y - 134, 13, 20);
    // Upper roof beam
    fill(166, 40, 34);
    rect(x - 90, y - 147, 180, 12);
    // Top roof layer
    fill(0);
    rect(x - 115, y - 160, 230, 12);
}

function drawBox(x, y) {
    stroke(0);
    fill(139, 90, 43);
    rect(x - 20, y - 40, 40, 40);

    stroke(80, 50, 20);
    strokeWeight(3);
    line(x - 14, y - 34, x + 14, y - 6);
    line(x + 14, y - 34, x - 14, y - 6);
    strokeWeight(1);
    noStroke();
}


function drawPowerUpItem(x, y, type) {
    if (type === 'plank') {
        //plank
        stroke(0);
        fill(160, 100, 50);
        rect(x - 22, y - 12, 44, 12);
        noStroke();
    } else if (type === 'balloon') {
        //balloon
        noStroke();
        fill(220, 80, 80);
        ellipse(x, y - 30, 28, 34);
        fill(180, 50, 50);
        triangle(x - 4, y - 13, x + 4, y - 13, x, y - 8);
        stroke(100);
        strokeWeight(1);
        line(x, y - 8, x, y);
        noStroke();
    } else if (type === 'smokebomb') {
        //bomb
        stroke(0);
        fill(50, 50, 60);
        ellipse(x, y - 18, 28, 28);
        fill(30, 30, 40);
        ellipse(x - 4, y - 22, 10, 10);
        noStroke();
    } else if (type === 'heart') {
        //heart
        noStroke();
        fill(220, 50, 80);
        ellipse(x - 7, y - 28, 16, 16);
        ellipse(x + 7, y - 28, 16, 16);
        triangle(x - 14, y - 23, x + 14, y - 23, x, y - 10);
    }
}

function drawShuriken(x, y) {
    fill(180);
    stroke(0);
    beginShape();
    vertex(x, y - 12);
    vertex(x + 5, y - 5);
    vertex(x + 12, y - 3);
    vertex(x + 5, y + 1);
    vertex(x, y + 12);
    vertex(x - 5, y + 1);
    vertex(x - 12, y - 3);
    vertex(x - 5, y - 5);
    vertex(x, y - 12);
    endShape();
    fill(255);
    ellipse(x, y, 6);
    noStroke();
}


function drawPlankBridge(canyonX, y) {
    stroke(80, 50, 20);
    strokeWeight(2);
    fill(160, 100, 50);
    rect(canyonX - 65, y - 10, 130, 10);
    stroke(120, 75, 35);
    line(canyonX - 50, y - 10, canyonX - 50, y);
    line(canyonX - 20, y - 10, canyonX - 20, y);
    line(canyonX + 10, y - 10, canyonX + 10, y);
    line(canyonX + 40, y - 10, canyonX + 40, y);
    strokeWeight(1);
    noStroke();
}

function drawInventoryHUD(items) {
    let slotSize = 44;
    let slots = 3;
    let startX = width / 2 - (slots * slotSize) / 2;
    let slotY = height - slotSize - 14;

    for (let i = 0; i < slots; i++) {
        let sx = startX + i * slotSize;

        // Slot background
        noStroke();
        fill(0, 0, 0, 120);
        rect(sx, slotY, slotSize - 2, slotSize - 2, 4);

        // Slot border
        stroke(180, 180, 180);
        strokeWeight(2);
        noFill();
        rect(sx, slotY, slotSize - 2, slotSize - 2, 4);
        strokeWeight(1);
        noStroke();

        // Item icon
        if (i < items.length) {
            let cx = sx + (slotSize - 2) / 2;
            let cy = slotY + (slotSize - 2) / 2;
            if (items[i] === 'plank') {
                fill(160, 100, 50);
                stroke(80, 50, 20);
                rect(cx - 14, cy - 4, 28, 8);
                noStroke();
            } else if (items[i] === 'balloon') {
                noStroke();
                fill(220, 80, 80);
                ellipse(cx, cy - 4, 18, 22);
                fill(180, 50, 50);
                triangle(cx - 3, cy + 7, cx + 3, cy + 7, cx, cy + 11);
                stroke(100);
                line(cx, cy + 11, cx, cy + 16);
                noStroke();
            } else if (items[i] === 'smokebomb') {
                fill(50, 50, 60);
                stroke(0);
                ellipse(cx, cy, 18, 18);
                noStroke();
            }
        }
    }

    // Label
    noStroke();
    fill(220);
    textAlign(CENTER);
    textSize(22);
    text('INVENTORY  [X] to use', width / 2, height - 6);
}

function drawScroll(x, y) {
    noStroke();
    fill(210, 170, 100);
    rect(x - 10, y - 22, 20, 16);
    fill(190, 140, 75);
    ellipse(x - 10, y - 14, 9, 16);
    ellipse(x + 10, y - 14, 9, 16);
    fill(200, 50, 50);
    rect(x - 2, y - 24, 4, 20);
}

function drawPlatform(x, y, w) {
    noStroke();
    fill(139, 90, 43);
    rect(x, y, w, 12);
    fill(115, 74, 35);
    rect(x, y + 3, w, 3);
    rect(x, y + 8, w, 2);
}

function drawSpike(x, y) {
    fill(150, 150, 160);
    noStroke();
    triangle(x - 20, y, x - 10, y - 22, x, y);
    triangle(x - 10, y, x, y - 28, x + 10, y);
    triangle(x, y, x + 10, y - 22, x + 20, y);
}

function drawRope(x, topY, bottomY) {
    stroke(139, 90, 43);
    strokeWeight(4);
    line(x, topY, x, bottomY);
    fill(115, 74, 35);
    noStroke();
    for (let ky = topY + 12; ky < bottomY; ky += 25) {
        ellipse(x, ky, 8, 5);
    }
    strokeWeight(1);
}

function drawBackground(cloud, mountain, tree, torigate, world, platformList, canyon) {
    background(210, 170, 110);
    noStroke();
    fill(181, 112, 84, 25); rect(0, 0, 2048, 325);
    fill(171, 87, 73, 25); rect(0, 0, 2048, 235);
    fill(164, 69, 65, 25); rect(0, 0, 2048, 165);
    fill(107, 24, 17, 35); rect(0, 0, 2048, 100);

    push();
    translate(-cameraPosX, 0);

    //cloud
    for (let i = 0; i < cloud.info.length; i++) {
        drawCloud(cloud.info[i][0], cloud.info[i][1], cloud.info[i][2]);
        cloud.info[i][0] += cloud.info[i][3];
        if (cloud.info[i][0] > world.x + 200) {
            cloud.info[i][0] = -200;
        }
    }

    //mountain
    for (let i = 0; i < mountain.info.length; i++) {
        let m = mountain.info[i];
        if (m[4] === 1) {
            drawMountain1(m[3], m[0], m[1], m[2]);
        }
        else {
            drawMountain(m[3], m[0], m[1], m[2]);
        }
    }

    //tree
    for (let i = 0; i < tree.info.length; i++) {
        drawTree(tree.info[i][0], tree.info[i][1]);
    }


    if (!game.isComplete) {
        drawToriClose(torigate.x, torigate.y);
    }
    else {
        drawToriOpen(torigate.x, torigate.y);
    }


    noStroke();
    fill(115, 147, 53); rect(0, 432, world.x, 20);
    fill(105, 137, 48); rect(0, 440, world.x, 6);
    fill(95, 127, 43); rect(0, 446, world.x, 6);
    fill(81, 52, 33); rect(0, 452, world.x, 30);
    fill(71, 46, 28); rect(0, 482, world.x, 30);
    fill(61, 40, 23); rect(0, 512, world.x, 30);
    fill(51, 34, 18); rect(0, 542, world.x, 34);

    //platforms
    for (let i = 0; i < platformList.length; i++) {
        let p = platformList[i];
        drawPlatform(p.x, p.y, p.width);
    }

    //canyon
    for (let i = 0; i < canyon.x.length; i++) {
        let canyonX = canyon.x[i];
        drawCanyon(canyonX, canyon.y);

        let onPlank = plankList.some(p => p.canyonX === canyonX);
        if (!onPlank &&
            characterX < canyonX + CANYON_COLLISION_RANGE &&
            characterX > canyonX - CANYON_COLLISION_RANGE &&
            characterY === groundLevel) {
            isPlummeting = true;
            isLeft = false;
            isRight = false;
        }
    }
}