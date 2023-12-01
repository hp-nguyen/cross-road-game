cc.Class({
  extends: cc.Component,

  properties: {
    redLight: cc.Node,
    yellowLight: cc.Node,
    greenLight: cc.Node,
  },
  onLoad() {
    this.redLightComponent = this.redLight.getComponent('RedLight');
    this.yellowLightComponent = this.yellowLight.getComponent('YellowLight');
    this.greenLightComponent = this.greenLight.getComponent('GreenLight');
  },
  start() {
    this.timer = 0;
    this.redLightComponent.enabled = true;
  },
  update(dt) {
    this.timer += dt;
    if (this.timer >= 2.5) {
      this.yellowLightComponent.enabled = true;
    }
    if (this.timer >= 5) {
      this.greenLightComponent.enabled = true;
    }
  },
});
