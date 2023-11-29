cc.Class({
  extends: cc.Component,

  properties: {
    speed: 100,
  },

  start() {},

  move(dt) {
    this.node.x += this.speed * dt;
  },
  update(dt) {
    this.move(dt);
  },
});
