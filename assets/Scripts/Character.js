cc.Class({
  extends: require('Entity'),

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

  update(dt) {
    this.move(dt);
  },

  move(dt) {
    if (!this.isMoving) {
      return;
    }
    this.node.y += -this.speed * dt;
    this.node.x += -this.speed * dt;
    this.node.scale += this.speedScale * dt;
  },
 
});
