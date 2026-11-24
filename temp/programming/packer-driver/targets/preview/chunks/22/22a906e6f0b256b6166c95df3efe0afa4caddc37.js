System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, SYNERGY_TABLE, NEIGHBOR_OFFSETS;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "31c3dqpgVBCQ7t4tCIzPtnm", "SynergyConfig", undefined);

      _export("SYNERGY_TABLE", SYNERGY_TABLE = [{
        tagA: '餐饮',
        tagB: '休闲',
        bonus: 0.2
      }, {
        tagA: '餐饮',
        tagB: '餐饮',
        bonus: 0.1
      }, {
        tagA: '零售',
        tagB: '餐饮',
        bonus: 0.15
      }]);
      /** 四邻偏移（上、下、左、右）。开罗一般是相邻加成，不对角线 */


      _export("NEIGHBOR_OFFSETS", NEIGHBOR_OFFSETS = [{
        dx: 0,
        dy: 1
      }, {
        dx: 0,
        dy: -1
      }, {
        dx: 1,
        dy: 0
      }, {
        dx: -1,
        dy: 0
      }]);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=22a906e6f0b256b6166c95df3efe0afa4caddc37.js.map