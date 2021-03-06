export function loadEndScene(currentLanguage) {
  const bgWidth = width() > 1280 ? width() : 1280;
  const bgHeight = height() > 720 ? height() : 720;

  scene("end", (playerScore, asteroidsDestroyed) => {
    let playerBest = getData("player-best", 0) || 0;

    if (playerScore.value > playerBest) {
      playerBest = playerScore.value;
      setData("player-best", playerScore.value);
    }

    layers([
      "bg",
      "ui",
    ], "end");
  
    add([
      sprite("space", { width: bgWidth, height: bgHeight, }),
      pos(0, 0),
      layer("bg"),
    ]);

    add([
      text(currentLanguage.battleReport.title, { font: "sinko" }),
      pos(center().x, center().y - 120),
      origin("center"),
      layer("ui"),
      scale(4),
    ]);
    
    add([
      text(currentLanguage.battleReport.asteroids + asteroidsDestroyed, { font: "sinko" }),
      pos(center().x, center().y + 80),
      origin("center"),
      layer("ui"),
      scale(3),
    ]);
  
    add([
      text(currentLanguage.battleReport.total + playerScore.value, { font: "sinko" }),
      pos(center().x, center().y + 200),
      origin("center"),
      layer("ui"),
      scale(3),
    ]);
  
    onKeyPress("space", () => {
      go("menu", playerBest);
    });
    onClick(() => {
      go("menu", playerBest);
    });
  });
}