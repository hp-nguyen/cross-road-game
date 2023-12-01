cc.Class({
  extends: cc.Component,

  properties: {
    greenLight: cc.Node,
    character: cc.Node,
    car: cc.Node,
  },

  onLoad() {},

  start() {},

  update(dt) {
    if (this.greenLight.getComponent('GreenLight').isLightOn) {
      this.car.getComponent('Car').enabled = true;
      this.character.getComponent('Character').enabled = true;
    }
  },
});
