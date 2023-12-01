cc.Class({
  extends: cc.Component,

  properties: {
    speed: 50,
    sprite: cc.Sprite,
    isMoving: false,
  },

  onLoad() {
    this.spriteAnim = this.sprite.getComponent(cc.Animation);
    this.spriteAnim.play('idle');
    this.distanceScale = 1 - 0.7;
    this.speedScale = this.distanceScale / 5;
  },

  start() {
    this.spriteAnim.play('walking');
    this.isMoving = true;
  },
  move(dt) {
    if (!this.isMoving) return;
    this.node.y += -this.speed * dt;
    this.node.x += -this.speed * dt;
    this.node.scale += this.speedScale * dt;
  },
  update(dt) {
    this.move(dt);
  },
});
