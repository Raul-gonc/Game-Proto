export default class Componete extends Phaser.GameObjects.GameObject {
  constructor(scene, width, height, name_frame, values) {
    super(scene, "sprite");
    this.scene = scene;
    this.object = scene.add
      .image(width, height, name_frame)
      .setInteractive()
      .on("pointerdown", function (pointer, localX, localY, event) {
        this.scene.scene.launch("menu", values);
      });
  }
}
