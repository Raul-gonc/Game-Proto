const config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.RESIZE,
    parent: "game",
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [],
};

const game = new Phaser.Game(config);
