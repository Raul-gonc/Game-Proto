export default class Escola extends Phaser.GameObjects.GameObject {
  constructor(scene, width, height, scale) {
    super(scene, "sprite");
    this.scene = scene;
    this.escola = scene.add
      .image(width - 281, height + 284, "escola")
      .setInteractive()
      .on("pointerdown", function (pointer, localX, localY, event) {
        console.log("Teste");
      });
    this.escola.setScale(scale);
  }
}
