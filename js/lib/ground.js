import Componete from "./object.js";

export default class Ground extends Phaser.Scene {
  constructor() {
    super({ key: "ground" });
  }

  preload() {
    this.load.image("ground", "./content/ground.png");
    this.load.image("structures", "./content/structures.png");
    this.load.image("escola", "./content/sprites/escola.png");
    this.load.image("prefeitura", "./content/sprites/prefeitura.png");
  }

  create() {
    this.width = this.sys.canvas.width / 2;
    this.height = this.sys.canvas.height / 2;

    this.ground = this.add.image(this.width, this.height, "ground");
    this.structues = this.add.image(this.width, this.height, "structures");

    const values = [this.ground, this.structues];
    this.escola = new Componete(
      this,
      this.width - 200,
      this.height + 200,
      "escola",
      { "Ensino Médio": 0 }
    );

    this.prefeitura = new Componete(
      this,
      this.width + 9,
      this.height - 40,
      "prefeitura",
      { "Media Idade População": 0 ,"Proporção Homens e Mulheres":0,"Mulheres gravidas":0}
    );
  }

  update() {
  }
}
