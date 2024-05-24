export default class Componete extends Phaser.GameObjects.GameObject {
  constructor(scene, width, height, name_frame) {
    super(scene, "sprite");
    return scene.add
      .image(width, height, name_frame)
      .setInteractive()
      .on("pointerdown", function (pointer, localX, localY, event) {
        scene.scene.launch("menu", { value: 1 });
      });
  }
}
