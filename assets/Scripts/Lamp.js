// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  extends: cc.Component,

  properties: {
    colorOn: cc.Color,
    colorOff: cc.Color,
    totalTimeOn: 1, // Total time for the light to be on (in seconds)
    blinkInterval: 0.2, // Interval between blinks (in seconds)
    totalBlinks: 3, // Total number of blinks
    dragon: cc.Sprite,
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
    if (this.lightOn && !this.blinking) {
      this.timer += dt;
      // Turn off the light after totalTimeOn
      if (this.timer >= this.totalTimeOn) {
        this.blinkCount = 0;
        this.blinking = true;
        this.timer = 0;
      }
    }

    if (this.blinking) {
      this.timer += dt;

      // Blink every blinkInterval seconds
      if (this.timer >= this.blinkInterval) {
        if (this.lightOn) {
          this.turnOff();
        } else {
          this.turnOn();
        }
        this.timer = 0;
        this.blinkCount++;

        // Turn off the blinking after the specified number of blinks
        if (this.blinkCount >= this.totalBlinks * 2) {
          this.blinking = false;
          this.turnOff();
          if (this.node.name === 'GreenLamp') {
            this.dragon.getComponent('Dragon').enabled = true;
            this.turnOn();
            this.isStable = true;
          }
        }
      }
    }
  },
});
