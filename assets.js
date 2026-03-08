// --- Sound Globals ---
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
var backGroundSound;
var mainMenuSound;
var buttonSelectSound;


// --- Preload ---
function preload() {
    soundFormats('mp3');

    // sounds
    deathSound = loadSound("assets/death.mp3");
    deathSound.setVolume(0.3);

    jumpSound = loadSound("assets/jump_sound.mp3");
    jumpSound.setVolume(0.1);

    shurikenSound = loadSound("assets/shuriken.mp3");
    shurikenSound.setVolume(0.1);

    balloonSound = loadSound("assets/balloon_equip.mp3");
    balloonSound.setVolume(0.1);

    bombSound = loadSound("assets/bomb_sound.mp3");
    bombSound.setVolume(0.1);

    plankSound = loadSound("assets/plank_placing.mp3");
    plankSound.setVolume(0.3);

    boxSound = loadSound("assets/box_breaking.mp3");
    boxSound.setVolume(0.1);

    transitionSound = loadSound("assets/map_transition.mp3");
    transitionSound.setVolume(0.3);

    pickUpSound = loadSound("assets/pick_up_sound.mp3");
    pickUpSound.setVolume(0.3);

    enemySound = loadSound("assets/enemy_death.mp3");
    enemySound.setVolume(0.3);

    playerDamageSound = loadSound("assets/player_damage.mp3");
    playerDamageSound.setVolume(0.1);

    // music
    backGroundSound = loadSound("assets/background_loop.mp3");
    backGroundSound.setVolume(0.1);

    mainMenuSound = loadSound("assets/main_menu_loop.mp3");
    mainMenuSound.setVolume(0.1);

    buttonSelectSound = loadSound("assets/button_select.mp3");
    buttonSelectSound.setVolume(0.1);

    // font
    font = loadFont('assets/game_over.ttf');
}
