System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  /**
   * 推进冷却并返回本帧应发射次数。
   * 发射器计时规则的唯一实现。接受任何带 cooldownTimer 字段的对象。
   */
  function advanceCooldown(state, fireInterval, dt) {
    state.cooldownTimer += dt;
    let count = 0;
    let guard = 0;

    while (state.cooldownTimer >= fireInterval && guard++ < 16) {
      state.cooldownTimer -= fireInterval;
      count++;
    }

    return count;
  }

  _export("advanceCooldown", advanceCooldown);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c7a3fgqvl5JyrR+KdOfaMIw", "FireCooldown", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d1259fb829e8761b0965f303d7e09a794807620a.js.map