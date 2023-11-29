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
    speed: 50,
    anim: cc.Animation,
  },

  onLoad() {
    this.anim = this.node.getComponent(cc.Animation);
    this.anim.play('dragonMove');
  },

  start() {},
  move(dt) {
    if (this.node.y <= -70) {
      this.anim.play('Death');
      this.node.color = cc.Color.GRAY;
      return;
    }

    this.node.y += -this.speed * dt;
  },
  update(dt) {
    this.move(dt);
  },
});