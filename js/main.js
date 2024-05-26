import ground from "./lib/ground.js";
import menu from "./lib/menu.js";
const config = {
  type: Phaser.AUTO,
  width: 1300,
  height: 900,
  scale: {
    mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
    parent: "game",
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [ground,menu],
};

const game = new Phaser.Game(config);
