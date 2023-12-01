cc.Class({
  extends: cc.Component,

  properties: {
    nodeA: cc.Node,
    nodeB: cc.Node,
    isColliding: false,
  },

  update(dt) {
    let positionA = this.nodeA.position;
    let positionB = this.nodeB.position;

    let distance = positionA.sub(positionB).mag();

    let radiusA = this.nodeA.width / 2;
    let radiusB = this.nodeB.width / 2;
    if (distance < radiusA + radiusB && !this.isColliding) {
      this.isColliding = true;
      if (this.isColliding) {
        this.nodeA.getComponent('Character').isMoving = false;
        this.nodeA.getComponent('Character').spriteAnim.play('dying');
      }
    }
  },
});
