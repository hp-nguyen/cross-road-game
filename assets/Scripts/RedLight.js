cc.Class({
  extends: require('Light'),
  
  start() {
    this.turnOn();
  },

  update(dt) {
    if (this.isLightOn && !this.isBlinking) {
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
});
