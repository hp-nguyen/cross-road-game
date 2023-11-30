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
    cc.log(distance, radiusA + radiusB);
    if (distance < radiusA + radiusB) {
      if (!this.spriteA.getComponent('Golem').isColliding) {
        this.spriteA.getComponent('Golem').isColliding = true;
        this.spriteA.getComponent('Golem').anim.play('dying');
      }
    }
  },
});
