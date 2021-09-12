import loadTutorial from "../logic/tutorial.js";
import loadBackgrounds from "../logic/background.js";
import loadAsteroid from "../logic/asteroid.js";
import loadPlayer from "../logic/player.js";
import handlePlayerMovementAnimations from "../logic/handlers/player-movement.js";
import loadBullet from "../logic/bullet.js";

export function loadGameScene(currentLanguage) {
  scene("game", () => {
    layers([
      "bg",
      "game",
      "ui",
    ], "game");

    const PLAYER_MOVE_SPEED = 400;
    const PLAYER_LIFE = 10;
    const ASTEROID_LIFE = 8;
    const BULLET_DAMAGE = 2;
    const ASTEROID_DAMAGE = 5;
    const BULLET_SPEED = 500;
    const BACKGROUND_SPEED = 80;
    const ASTEROID_SPEED = 200;

    let playerShootSpeed = 0.2;

    loadTutorial(currentLanguage);
    loadBackgrounds(BACKGROUND_SPEED);
    loadAsteroid(ASTEROID_LIFE, ASTEROID_SPEED);
    loadPlayer(PLAYER_LIFE, ASTEROID_DAMAGE);

    const player = get("player")[0];
    handlePlayerMovementAnimations(player, PLAYER_MOVE_SPEED);
    loadBullet(player, playerShootSpeed, BULLET_SPEED, BULLET_DAMAGE);
  });
}