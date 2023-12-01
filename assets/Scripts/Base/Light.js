cc.Class({
  extends: cc.Component,

  properties: {
    colorOn: cc.Color,
    colorOff: cc.Color,
    totalTimeOn: 1,
    blinkInterval: 0.2,
    totalBlinks: 3,
  },

  onLoad() {
    this.node.color = this.colorOff;
    this.timer = 0;
    this.isLightOn = false;
    this.isBlinking = false;
    this.blinkCount = 0;
  },

  turnOn() {
    this.isLightOn = true;
    this.node.color = this.colorOn;
  },

  turnOff() {
    this.isLightOn = false;
    this.node.color = this.colorOff;
  },

  blink(dt) {
    this.timer += dt;
    if (this.timer >= this.blinkInterval) {
      if (this.isLightOn) {
        this.turnOff();
      } else {
        this.turnOn();
      }
      this.timer = 0;
      this.blinkCount++;

      if (this.blinkCount >= this.totalBlinks * 2) {
        this.isBlinking = false;
        this.turnOff();
      }
    }
  },
});
