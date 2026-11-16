System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Entity, _crd, _nextId;

  _export("Entity", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2a2f8HpwvxHjLM7RwdnW77J", "Entity", undefined);

      _nextId = 1;

      _export("Entity", Entity = class Entity {
        constructor() {
          this.id = _nextId++;
          this.alive = true;
          this.x = 0;
          this.y = 0;
          this.angle = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f2f10b04a81e701051b8e98903025649b4f1e6ec.js.map