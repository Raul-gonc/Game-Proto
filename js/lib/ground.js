import Escola from "./object.js";

export default class Ground extends Phaser.Scene {
  constructor() {
    super({ key: "ground" });
  }

  preload() {
    this.load.image("ground", "./content/ground.png");
    this.load.image("structures", "./content/structures.png");
    this.load.image("escola", "./content/sprites/escola.png");
  }

  create() {
    const width = this.sys.canvas.width / 2;
    const height = this.sys.canvas.height / 2;
    const ground = this.add.image(width, height, "ground");
    const structues = this.add.image(width, height, "structures");
    const scale = 1.4;
    const values = [ground, structues];
    values.forEach(function (value) {
      value.setScale(scale);
    });
    this.escola = new Escola(this, width, height, scale);
  }

  update() {}
}
