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
    if (this.timer >= 2) {
      this.redLamp.active = false;
      this.yellowLamp.active = true;
    }
    if (this.timer >= 4) {
      this.yellowLamp.active = false;
      this.greenLamp.active = true;
    }
    if (this.timer >= 6) {
      this.greenLamp.active = true;
    }
  },
});
