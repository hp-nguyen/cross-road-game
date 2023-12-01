cc.Class({
  extends: cc.Component,

  properties: {
    greenLight: cc.Node,
    character: cc.Node,
    car: cc.Node,
  },

  onLoad() {
    this.isCollided = false;
  },

  start() {},

  update(dt) {
    if (this.greenLight.getComponent('GreenLight').isLightOn) {
      this.car.getComponent('Car').enabled = true;
      this.character.getComponent('Character').enabled = true;
    }
    if (!this.isCollided) {
      if (this.collisionCheck(this.character, this.car)) {
        this.isCollided = true;
        this.character.getComponent('Character').isMoving = false;
        this.character.getComponent('Character').spriteAnim.play('dying');
      }
    }
  },
  collisionCheck(nodeA, nodeB) {
    const positionA = nodeA.position;
    const positionB = nodeB.position;
    const distance = positionA.sub(positionB).mag();
    const minSafeDistance = (nodeA.width + nodeB.width) / 2;
    return distance < minSafeDistance;
  },
});
