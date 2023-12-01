cc.Class({
  extends: cc.Component,

  properties: {
    redLight: cc.Node,
    yellowLight: cc.Node,
    greenLight: cc.Node,
  },
  onLoad() {
    this.redLightScript = this.redLight.getComponent('RedLight');
    this.yellowLightScript = this.yellowLight.getComponent('YellowLight');
    this.greenLightScript = this.greenLight.getComponent('GreenLight');
    this.timer = 0;
  },
  start() {
    this.redLightScript.enabled = true;
  },
  update(dt) {
    this.timer += dt;
    if (this.timer >= 2.5) {
      this.yellowLightScript.enabled = true;
    }
    if (this.timer >= 5) {
      this.greenLightScript.enabled = true;
    }
  },
});
