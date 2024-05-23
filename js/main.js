import ground from "./lib/ground.js";
const config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.RESIZE,
    parent: "game",
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [ground],
  // physics: {
  //   default: "arcade",
  //   arcade: {
  //     gravity: { y: 300 },
  //     debug: true,
  //   },
  // },
};

const game = new Phaser.Game(config);
