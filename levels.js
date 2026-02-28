const levels = [
    {
        worldWidth: 2000,
        canyons: [{ x: 512 }],
        trees: [
            [150, 0.6], [210, 0.5], [650, 0.5], [750, 0.6], [700, 0.4],
            [1000, 0.6], [1100, 0.6], [1050, 0.5], [1450, 0.7], [1500, 0.5],
            [1770, 0.5], [1880, 0.7], [1820, 0.4]
        ],
        mountains: [
            [100, 500, 500], [150, 400, 250], [50, 500, 1400],
            [150, 400, 1200], [100, 400, 1600]
        ],
        clouds: [
            [100, 75, 45, 0.3], [500, 85, 55, 0.25], [800, 75, 45, 0.35],
            [1200, 85, 55, 0.3], [1600, 75, 55, 0.25]
        ],
        enemies: [{ x: 650, minX: 570, maxX: 750, speed: 2 }],
        boxes: [{ x: 350 }],
        scrolls: [{ x: 900 }],
        platforms: [],
        spikes: [],
        ropes: [],
        torigateX: 1850,
    },
    {
        worldWidth: 2500,
        canyons: [{ x: 500 }, { x: 1300 }],
        trees: [
            [150, 0.6], [220, 0.5], [400, 0.5], [650, 0.6], [720, 0.4],
            [950, 0.5], [1050, 0.6], [1180, 0.5], [1450, 0.6], [1550, 0.5],
            [1750, 0.7], [1900, 0.5], [2050, 0.6], [2200, 0.4], [2350, 0.5]
        ],
        mountains: [
            [100, 500, 300], [130, 400, 600], [80, 500, 1000],
            [150, 400, 1500], [100, 450, 2000], [120, 400, 2300]
        ],
        clouds: [
            [100, 75, 45, 0.3], [450, 85, 55, 0.25], [850, 75, 45, 0.35],
            [1300, 85, 55, 0.3], [1700, 75, 55, 0.25], [2100, 80, 50, 0.28]
        ],
        platforms: [
            { x: 820, y: 375, width: 160 },
            { x: 1680, y: 325, width: 160 },
        ],
        enemies: [
            { x: 640, minX: 560, maxX: 730, speed: 2.5 },
            { x: 1440, minX: 1360, maxX: 1540, speed: 2.5 },
        ],
        boxes: [{ x: 350 }, { x: 1150 }],
        scrolls: [
            { x: 200 },
            { x: 900, y: 375 },
            { x: 1760, y: 325 },
        ],
        spikes: [],
        ropes: [],
        torigateX: 2350,
    },
    {
        worldWidth: 3000,
        canyons: [{ x: 450 }, { x: 1150 }, { x: 1850 }],
        trees: [
            [150, 0.6], [200, 0.5], [350, 0.5], [600, 0.6], [680, 0.4],
            [900, 0.5], [980, 0.6], [1050, 0.4], [1300, 0.6], [1400, 0.5],
            [1650, 0.7], [1780, 0.5], [2000, 0.6], [2150, 0.4], [2300, 0.5],
            [2500, 0.6], [2650, 0.5], [2800, 0.6]
        ],
        mountains: [
            [100, 500, 200], [130, 400, 550], [80, 500, 1000],
            [150, 400, 1400], [100, 450, 1800], [120, 400, 2200], [90, 480, 2600]
        ],
        clouds: [
            [100, 75, 45, 0.3], [400, 85, 55, 0.25], [750, 75, 45, 0.35],
            [1100, 85, 55, 0.3], [1500, 75, 55, 0.25], [1900, 80, 50, 0.28], [2400, 75, 45, 0.32]
        ],
        platforms: [
            { x: 700, y: 375, width: 160 },
            { x: 1350, y: 325, width: 160 },
            { x: 2000, y: 325, width: 80 },
            { x: 2100, y: 270, width: 160 },
        ],
        enemies: [
            { x: 600, minX: 540, maxX: 700, speed: 2.5 },
            { x: 780, minX: 700, maxX: 860, speed: 3, floorY: 375 },
            { x: 1300, minX: 1200, maxX: 1400, speed: 3 },
            { x: 1430, minX: 1350, maxX: 1510, speed: 3, floorY: 325 },
        ],
        boxes: [{ x: 300 }, { x: 1050 }, { x: 1750 }],
        scrolls: [
            { x: 200 },
            { x: 780, y: 375 },
            { x: 1430, y: 325 },
            { x: 2180, y: 270 },
        ],
        spikes: [
            { x: 1000, y: 0 },
            { x: 2450, y: 0 },
        ],
        ropes: [],
        torigateX: 2850,
    },
    {
        worldWidth: 3500,
        canyons: [{ x: 400 }, { x: 900 }, { x: 1600 }, { x: 2300 }],
        trees: [
            [150, 0.6], [200, 0.5], [330, 0.5], [550, 0.6], [630, 0.4],
            [780, 0.5], [860, 0.6], [1050, 0.4], [1200, 0.5], [1350, 0.6],
            [1530, 0.7], [1680, 0.5], [1850, 0.6], [2050, 0.4], [2200, 0.5],
            [2400, 0.6], [2550, 0.5], [2700, 0.6], [2900, 0.5], [3100, 0.6]
        ],
        mountains: [
            [100, 500, 200], [130, 400, 500], [80, 500, 900],
            [150, 400, 1300], [100, 450, 1700], [120, 400, 2100],
            [90, 480, 2600], [110, 430, 3000]
        ],
        clouds: [
            [100, 75, 45, 0.3], [400, 85, 55, 0.25], [750, 75, 45, 0.35],
            [1100, 85, 55, 0.3], [1500, 75, 55, 0.25], [1900, 80, 50, 0.28],
            [2300, 75, 45, 0.32], [2800, 85, 55, 0.27]
        ],
        platforms: [
            { x: 600, y: 390, width: 140 },
            { x: 1250, y: 325, width: 140 },
            { x: 1800, y: 325, width: 80 },
            { x: 1900, y: 270, width: 140 },
            { x: 2400, y: 325, width: 140 },
            { x: 2490, y: 160, width: 130 },
        ],
        enemies: [
            { x: 550, minX: 480, maxX: 660, speed: 3 },
            { x: 670, minX: 600, maxX: 740, speed: 3.5, floorY: 390 },
            { x: 1050, minX: 970, maxX: 1150, speed: 3 },
            { x: 1330, minX: 1250, maxX: 1390, speed: 3.5, floorY: 325 },
            { x: 1750, minX: 1670, maxX: 1850, speed: 3.5 },
            { x: 1980, minX: 1900, maxX: 2040, speed: 3.5, floorY: 270 },
            { x: 2800, minX: 2720, maxX: 2880, speed: 3.5 }
        ],
        boxes: [{ x: 300 }, { x: 800 }, { x: 1500 }, { x: 2200 }],
        scrolls: [
            { x: 150 },
            { x: 680, y: 390 },
            { x: 1330, y: 325 },
            { x: 1980, y: 270 },
            { x: 2530, y: 160 },
        ],
        spikes: [
            { x: 1400, y: 0 },
            { x: 2100, y: 0 },
            { x: 2450, y: 325 },
        ],
        ropes: [
            { x: 2520, topY: 160, bottomY: 325 },
        ],
        torigateX: 3350,
    },
    {
        worldWidth: 4000,
        canyons: [{ x: 380 }, { x: 850 }, { x: 1450 }, { x: 2100 }, { x: 2750 }],
        trees: [
            [150, 0.6], [200, 0.5], [300, 0.5], [500, 0.6], [580, 0.4],
            [730, 0.5], [810, 0.6], [1000, 0.4], [1150, 0.5], [1300, 0.6],
            [1420, 0.7], [1580, 0.5], [1750, 0.6], [1950, 0.4], [2080, 0.5],
            [2270, 0.6], [2430, 0.5], [2650, 0.6], [2820, 0.5], [3050, 0.6],
            [3200, 0.5], [3450, 0.6]
        ],
        mountains: [
            [100, 500, 200], [130, 400, 500], [80, 500, 850],
            [150, 400, 1250], [100, 450, 1600], [120, 400, 2000],
            [90, 480, 2450], [110, 430, 2900], [100, 460, 3400]
        ],
        clouds: [
            [100, 75, 45, 0.3], [400, 85, 55, 0.25], [700, 75, 45, 0.35],
            [1000, 85, 55, 0.3], [1400, 75, 55, 0.25], [1800, 80, 50, 0.28],
            [2200, 75, 45, 0.32], [2700, 85, 55, 0.27], [3200, 80, 50, 0.3]
        ],
        platforms: [
            { x: 550, y: 390, width: 130 },
            { x: 1100, y: 325, width: 130 },
            { x: 1510, y: 375, width: 120 },
            { x: 1650, y: 325, width: 130 },
            { x: 1730, y: 160, width: 130 },
            { x: 2500, y: 325, width: 130 },
            { x: 3050, y: 325, width: 80 },
            { x: 3150, y: 270, width: 130 },
        ],
        enemies: [
            { x: 530, minX: 460, maxX: 620, speed: 3.5 },
            { x: 615, minX: 550, maxX: 680, speed: 4, floorY: 390 },
            { x: 1000, minX: 920, maxX: 1130, speed: 3.5 },
            { x: 1180, minX: 1100, maxX: 1230, speed: 4, floorY: 325 },
            { x: 1600, minX: 1500, maxX: 1700, speed: 4 },
            { x: 1700, minX: 1650, maxX: 1780, speed: 2, floorY: 325 },
            { x: 2250, minX: 2150, maxX: 2350, speed: 4 },
        ],
        boxes: [{ x: 300 }, { x: 770 }, { x: 1370 }, { x: 2000 }, { x: 2670 }],
        scrolls: [
            { x: 150 },
            { x: 615, y: 390 },
            { x: 1180, y: 325 },
            { x: 1720, y: 325 },
            { x: 1780, y: 160 },
            { x: 2540, y: 325 },
            { x: 3210, y: 270 },
        ],
        spikes: [
            { x: 600, y: 0 },
            { x: 1200, y: 0 },
            { x: 1900, y: 0 },
            { x: 2900, y: 0 },
            { x: 3180, y: 270 },
        ],
        ropes: [
            { x: 1770, topY: 160, bottomY: 325 },
        ],
        torigateX: 3850,
    }
];


function loadLevel(i) {
    let lvl = levels[i];

    world = { x: lvl.worldWidth };
    torigate = { x: lvl.torigateX, y: groundLevel };
    plankList = [];

    tree = { info: lvl.trees.slice() };

    canyon = { x: [], y: 432 };
    for (let j = 0; j < lvl.canyons.length; j++) {
        canyon.x.push(lvl.canyons[j].x);
    }

    mountain = { info: [] };
    for (let j = 0; j < lvl.mountains.length; j++) {
        let m = lvl.mountains[j];
        mountain.info.push([m[0], m[1], m[2], groundLevel, int(random(1, 3))]);
    }

    cloud = { info: [] };
    for (let j = 0; j < lvl.clouds.length; j++) {
        cloud.info.push(lvl.clouds[j].slice());
    }

    enemyList = [];
    for (let j = 0; j < lvl.enemies.length; j++) {
        let enemy = lvl.enemies[j];
        enemyList.push({ x: enemy.x, y: enemy.floorY || groundLevel, minX: enemy.minX, maxX: enemy.maxX, speed: enemy.speed, dir: 1, isAlive: true });
    }

    let powerUps = ['plank', 'balloon', 'smokebomb', 'heart'];
    boxList = [];
    for (let j = 0; j < lvl.boxes.length; j++) {
        let box = lvl.boxes[j];
        boxList.push({ x: box.x, y: groundLevel, isIntact: true, powerUp: powerUps[int(random(0, 4))], collected: false });
    }

    scrollList = [];
    for (let j = 0; j < lvl.scrolls.length; j++) {
        let scroll = lvl.scrolls[j];
        scrollList.push({ x: scroll.x, y: scroll.y || groundLevel, collected: false });
    }

    platformList = [];
    for (let j = 0; j < lvl.platforms.length; j++) {
        let platform = lvl.platforms[j];
        platformList.push({ x: platform.x, y: platform.y, width: platform.width });
    }

    spikeList = [];
    for (let j = 0; j < lvl.spikes.length; j++) {
        let sp = lvl.spikes[j];
        spikeList.push({ x: sp.x, y: sp.y === 0 ? groundLevel : sp.y });
    }

    ropeList = [];
    for (let j = 0; j < lvl.ropes.length; j++) {
        let rope = lvl.ropes[j];
        ropeList.push({ x: rope.x, topY: rope.topY, bottomY: rope.bottomY });
    }
}
