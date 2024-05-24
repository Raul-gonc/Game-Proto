export default class Menu extends Phaser.Scene {
  constructor() {
    super({ key: "menu" });
  }

  init(data) {
    this.value = data["value"];
  }

  preload() {
    this.load.image("menu", "./content/menu.png");
  }

  create() {
    this.width = this.sys.canvas.width / 2;
    this.height = this.sys.canvas.height / 2;
    this.menu = this.add.image(this.width, this.height, "menu");
    const close = this.add.text(this.width + 120, this.height - 130, "X", {
      fill: "#000",
      bold: true,
    });
    close.setInteractive().on("pointerdown", () => {
      this.scene.stop("menu");
    });
  }

  update() {}
}
