export default class Menu extends Phaser.Scene {
  constructor() {
    super({ key: "menu" });
  }

  init(data) {
    this.data = data;
    console.log(this.data);
  }

  preload() {
    this.load.image("menu", "./content/menu.png");
    this.load.image("close", "./content/buttons/close_2.png");
    this.load.image("left", "./content/buttons/left_2.png");
    this.load.image("right", "./content/buttons/right_2.png");
  }

  create() {
    this.width = this.sys.canvas.width / 2;
    this.height = this.sys.canvas.height / 2;
    this.menu = this.add.image(this.width, this.height, "menu");
    const close = this.add.image(this.width + 130, this.height - 130, "close");
    close.setScale(0.5);
    close.setInteractive().on("pointerdown", () => {
      this.scene.stop("menu");
    });

    var height_option = this.height - 110;
    var width_option = this.width - 140;
    this.componets = [];
    for (const [key, val] of Object.entries(this.data)) {
      var key_text = `${key}:`;
      this.add.text(width_option, height_option, key_text, { fontSize: 12 });
      var width_option_text_value = width_option + key_text.length * 6.6 + 10;
      var value = this.add.text(
        width_option_text_value,
        height_option,
        ` ${val}`,
        {
          fontSize: 12,
        }
      );
      var width_option_button = width_option_text_value + 30;
      var left_button = this.add
        .image(width_option_button, height_option + 6, "left")
        .setScale(0.4);
      var right_button = this.add
        .image(width_option_button + 25, height_option + 6, "right")
        .setScale(0.4);
      height_option += 30;
      this.componets.push({
        name: key,
        value: value,
        left_button: left_button,
        right_button: right_button,
      });
    }
  }

  update() {
    this.componets.forEach(function (values, index) {
      values["left_button"].setInteractive().on("pointerdown", () => {
        console.log(this.data);
        this.data[values["name"]] += 1;
        values["value"].setText(this.data[values["name"]]);
      },this.data);
    },this.data);
  }
}
