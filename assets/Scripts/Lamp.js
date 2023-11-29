cc.Class({
  extends: cc.Component,

  properties: {
    colorOn: cc.Color,
    colorOff: cc.Color,
    totalTimeOn: 1,
    blinkInterval: 0.2,
    totalBlinks: 3,
    dragon: cc.Sprite,
    car: cc.Sprite,
  },

  onLoad() {
    this.timer = 0;
    this.lightOn = false;
    this.blinking = false;
    this.isStable = false;
    this.blinkCount = 0;
    this.node.color = this.colorOff;
  },

  start() {
    this.turnOn();
  },

  turnOn() {
    this.lightOn = true;
    this.node.color = this.colorOn;
  },

  turnOff() {
    this.lightOn = false;
    this.node.color = this.colorOff;
  },

  update(dt) {
    if (this.isStable) return;
    if (this.node.name === 'GreenLamp') {
      this.turnOn();
      this.isStable = true;
      this.dragon.getComponent('Dragon').enabled = true;
      this.car.getComponent('Car').enabled = true;
      return;
    }
    if (this.lightOn && !this.blinking) {
      this.timer += dt;

      if (this.timer >= this.totalTimeOn) {
        this.turnOff();
        this.blinkCount = 0;
        this.blinking = true;
        this.timer = 0;
      }
    }

    if (this.blinking) {
      this.timer += dt;

      if (this.timer >= this.blinkInterval) {
        if (this.lightOn) {
          this.turnOff();
        } else {
          this.turnOn();
        }
        this.timer = 0;
        this.blinkCount++;

        if (this.blinkCount >= this.totalBlinks * 2) {
          this.blinking = false;
          this.turnOff();
        }
      }
    }
  },
});
