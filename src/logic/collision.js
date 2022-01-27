import loadCounter from "./counter.js";

export default function loadCollisions() {
  onCollide("enemy", "bullet", (e, b) => {
    if (!e.is("healthless")) {
      e.hurt(b.damage);
      if(!e.is("hide-damage")) {
        loadCounter(b.damage, e.pos);
      }
      play("hit", { volume: 0.05 })
    }
    b.destroy();
  });

  onCollide("player", "enemy", (p, e) => {
    if (p.isInvincible()) {
      return;
    }
    p.hurt(e.damage);
    loadCounter(e.damage, p.pos, 1.8, false, "hurt");

    p.reloadMeters();

    shake(3);
    if (!e.is("boss")) {
      e.destroy();
    }
  });

  onCollide("player", "collectable", (p, c) => {
    c.destroy();
  });
}