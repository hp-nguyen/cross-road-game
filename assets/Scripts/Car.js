cc.Class({
  extends: require('Entity'),
  onLoad() {
    this.spriteAnim = this.sprite.getComponent(cc.Animation)
  },
  start() {},

  move(dt) {
    this.node.x += this.speed * dt;
  },
  update(dt) {
    this.move(dt);
  },
});
