cc.Class({
  extends: cc.Component,

  properties: {
    Lamps: [cc.Node],
  },

  start() {
    this.redLamp = this.Lamps[0];
    this.yellowLamp = this.Lamps[1];
    this.greenLamp = this.Lamps[2];

    this.timer = 0;
    this.redLamp.active = true;
  },
  update(dt) {
    this.timer += dt;
    if (this.timer >= 2.5) {
      this.redLamp.active = false;
      this.yellowLamp.active = true;
    }
    if (this.timer >= 5) {
      this.yellowLamp.active = false;
      this.greenLamp.active = true;
    }
    if (this.timer >= 7.5) {
      this.greenLamp.active = true;
    }
  },
});
