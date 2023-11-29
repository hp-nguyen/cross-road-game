cc.Class({
  extends: cc.Component,

  properties: {
    speed: 50,
    anim: cc.Animation,
    isColliding: false,
  },

  onLoad() {
    this.anim = this.node.getComponent(cc.Animation);
    this.anim.play('idle');
  },

  start() {
    this.anim.play('move');
  },
  move(dt) {
    if (this.isColliding) {
      this.anim.play('death');
      this.node.color = cc.Color.GRAY;
      return;
    }
    this.node.y += -this.speed * dt;
    this.node.x += this.speed * dt;
    this.node.scale += dt;
  },
  update(dt) {
    this.move(dt);
  },
});
