cc.Class({
  extends: cc.Component,

  properties: {
    colorOn: cc.Color,
    colorOff: cc.Color,
    totalTimeOn: 1,
    blinkInterval: 0.2,
    totalBlinks: 3,
    character: cc.Node,
    car: cc.Node,
  },

  onLoad() {
    this.node.color = this.colorOff;
    this.timer = 0;
    this.lightOn = false;
    this.isBlinking = false;
    this.isStable = false;
    this.blinkCount = 0;
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
      this.character.getComponent('Character').enabled = true;
      this.car.getComponent('Car').enabled = true;
      return;
    }
    if (this.lightOn && !this.isBlinking) {
      this.timer += dt;

      if (this.timer >= this.totalTimeOn) {
        this.turnOff();
        this.blinkCount = 0;
        this.isBlinking = true;
        this.timer = 0;
      }
    }

    if (this.isBlinking) this.blink(dt);
  },
  blink(dt) {
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
        this.isBlinking = false;
        this.turnOff();
      }
    }
  },
});
