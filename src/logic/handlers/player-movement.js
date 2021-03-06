export default function handlePlayerMovementAnimations() {
  const player = get("player")[0];

  onKeyDown(["up", "w"], () => {
    if (debug.paused) return;
    if (player.pos.y > 0) {
      player.move(0, -player.moveSpeed);
    }
  });

  onKeyDown(["down", "s"], () => {
    if (debug.paused) return;
    if (player.pos.y < height()) {
      player.move(0, player.moveSpeed);
    }
  });

  onKeyDown(["left", "a"], () => {
    if (debug.paused) return;
    if (player.pos.x > 0) {
      player.move(-player.moveSpeed, 0);
    }
  });

  onKeyDown(["right", "d"], () => {
    if (debug.paused) return;
    if (player.pos.x < width()) {
      player.move(player.moveSpeed, 0);
    }
  });

  // animations 
  onKeyPress(["left", "a"], () => {
    if (debug.paused) return;
    if (isKeyDown("x")) {
      player.play("leanedLeftShoot", { loop: true });
    } else {
      player.play("leanedLeft", { loop: true });
    }
  });
  onKeyRelease(["left", "a"], () => {
    if (debug.paused) return;
    if (isKeyDown("x") && isKeyDown("right")) {
      player.play("leanedRightShoot", { loop: true });
    } else if (isKeyDown("right")) {
      player.play("leanedRight", { loop: true });
    } else if (isKeyDown("x")) {
      player.play("shoot", { loop: true });
    } else {
      player.play("idle", { loop: true });
    }
  });

  onKeyPress(["right", "d"], () => {
    if (debug.paused) return;
    if (isKeyDown("x")) {
      player.play("leanedRightShoot", { loop: true });
    } else {
      player.play("leanedRight", { loop: true });
    }
  });
  onKeyRelease(["right", "d"], () => {
    if (debug.paused) return;
    if (isKeyDown("x") && isKeyDown("left")) {
      player.play("leanedLeftShoot", { loop: true });
    } else if (isKeyDown("left")) {
      player.play("leanedLeft", { loop: true });
    } else if (isKeyDown("x")) {
      player.play("shoot", { loop: true });
    } else {
      player.play("idle", { loop: true });
    }
  });

  onKeyPress(["x", "l"], () => {
    if (debug.paused) return;
    if (isKeyDown("left")) {
      player.play("leanedLeftShoot", { loop: true });
    } else if (isKeyDown("right")) {
      player.play("leanedRightShoot", { loop: true });
    } else {
      player.play("shoot", { loop: true });
    }
  });

  onKeyRelease(["x", "l"], () => {
    if (debug.paused) return;
    if (isKeyDown("left")) {
      player.play("leanedLeft", { loop: true });
    } else if (isKeyDown("right")) {
      player.play("leanedRight", { loop: true });
    } else {
      player.play("idle", { loop: true });
    }
  });
}