cc.Class({
  extends: cc.Component,

  properties: {
    speed: 100,
    sprite: cc.Sprite,
  },
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
