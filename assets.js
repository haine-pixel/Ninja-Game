var jumpSound;
var deathSound;
var shurikenSound;
var balloonSound;
var bombSound;
var plankSound;
var boxSound;
var transitionSound;
var pickUpSound;
var enemySound;
var playerDamageSound;


function preload() {
    soundFormats('m4a');

    deathSound = loadSound("assets/death.m4a");
    deathSound.setVolume(0.3);

    jumpSound = loadSound("assets/jump_sound.m4a");
    jumpSound.setVolume(0.1);

    shurikenSound = loadSound("assets/shuriken.m4a");
    shurikenSound.setVolume(0.1);

    balloonSound = loadSound("assets/balloon_equip.m4a");
    balloonSound.setVolume(0.1);

    bombSound = loadSound("assets/bomb_sound.m4a");
    bombSound.setVolume(0.1);

    plankSound = loadSound("assets/plank_placing.m4a");
    plankSound.setVolume(0.3);

    boxSound = loadSound("assets/box_breaking.m4a");
    boxSound.setVolume(0.1);

    transitionSound = loadSound("assets/map_transition.m4a");
    transitionSound.setVolume(0.3);

    pickUpSound = loadSound("assets/pick_up_sound.m4a");
    pickUpSound.setVolume(0.3);

    enemySound = loadSound("assets/enemy_death.m4a");
    enemySound.setVolume(0.3);

    playerDamageSound = loadSound("assets/player_damage.m4a");
    playerDamageSound.setVolume(0.1);

    font = loadFont('assets/game_over.ttf');
}
