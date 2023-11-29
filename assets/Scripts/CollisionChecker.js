cc.Class({
  extends: cc.Component,

  properties: {
    spriteA: cc.Node,
    spriteB: cc.Node,
  },

  update(dt) {
    let positionA = this.spriteA.position;
    let positionB = this.spriteB.position;

    let distance = positionA.sub(positionB).mag();

    let radiusA = this.spriteA.width / 2;
    let radiusB = this.spriteB.width / 2;

    if (distance < radiusA + radiusB) {
      this.spriteA.getComponent('Dragon').isColliding = true;
    }
  },
});
