cc.Class({
  extends: cc.Component,

  properties: {
    audio: {
      default: [],
      type: [cc.AudioClip],
    },
  },
  onHit() {
    cc.audioEngine.play(this.audio[0], false, 1);
  },
  onDeath() {
    cc.audioEngine.play(this.audio[1], false, 1);
  },
});
