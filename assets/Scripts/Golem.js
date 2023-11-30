cc.Class({
  extends: cc.Component,

  properties: {
    speed: 50,
    anim: cc.Animation,
    isColliding: false,
  },

  onLoad() {
    this.anim = this.node.getChildByName('Golem').getComponent(cc.Animation);
    this.anim.play('idle');
    this.distanceScale = 1 - 0.7;
    this.speedScale = this.distanceScale / 5;
  },

  start() {
    this.anim.play('walking');
  },
  move(dt) {
    if (this.isColliding) {
      return;
    }
    this.node.y += -this.speed * dt;
    this.node.x += -this.speed * dt;
    this.node.scale += this.speedScale * dt;
  },
  update(dt) {
    this.move(dt);
  },
});
