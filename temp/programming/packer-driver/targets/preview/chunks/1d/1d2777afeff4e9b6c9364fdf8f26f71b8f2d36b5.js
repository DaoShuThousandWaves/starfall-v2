System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Sprite, SpriteFrame, UITransform, GRID_COLS, GRID_ROWS, gridToWorld, TILE_W, TILE_H, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, GridView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGRID_COLS(extras) {
    _reporterNs.report("GRID_COLS", "../Config/GridConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGRID_ROWS(extras) {
    _reporterNs.report("GRID_ROWS", "../Config/GridConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgridToWorld(extras) {
    _reporterNs.report("gridToWorld", "../Config/GridConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTILE_W(extras) {
    _reporterNs.report("TILE_W", "../Config/GridConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTILE_H(extras) {
    _reporterNs.report("TILE_H", "../Config/GridConfig", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      GRID_COLS = _unresolved_2.GRID_COLS;
      GRID_ROWS = _unresolved_2.GRID_ROWS;
      gridToWorld = _unresolved_2.gridToWorld;
      TILE_W = _unresolved_2.TILE_W;
      TILE_H = _unresolved_2.TILE_H;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ba535jFMCtI44s8LdvFFi7K", "GridView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'SpriteFrame', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GridView", GridView = (_dec = ccclass('GridView'), _dec2 = property(SpriteFrame), _dec(_class = (_class2 = class GridView extends Component {
        constructor() {
          super(...arguments);

          // 在编辑器里拖入单格草地图
          _initializerDefineProperty(this, "tileSpriteFrame", _descriptor, this);
        }

        // HallScene 会调用这个方法
        createMap() {
          if (!this.tileSpriteFrame) return;
          var tileNodes = [];

          for (var y = 0; y < (_crd && GRID_ROWS === void 0 ? (_reportPossibleCrUseOfGRID_ROWS({
            error: Error()
          }), GRID_ROWS) : GRID_ROWS); y++) {
            for (var x = 0; x < (_crd && GRID_COLS === void 0 ? (_reportPossibleCrUseOfGRID_COLS({
              error: Error()
            }), GRID_COLS) : GRID_COLS); x++) {
              var tileNode = new Node("Tile_" + x + "_" + y);
              var sprite = tileNode.addComponent(Sprite);
              sprite.spriteFrame = this.tileSpriteFrame;
              sprite.sizeMode = Sprite.SizeMode.CUSTOM;
              tileNode.getComponent(UITransform).setContentSize(_crd && TILE_W === void 0 ? (_reportPossibleCrUseOfTILE_W({
                error: Error()
              }), TILE_W) : TILE_W, _crd && TILE_H === void 0 ? (_reportPossibleCrUseOfTILE_H({
                error: Error()
              }), TILE_H) : TILE_H);
              var pos = (_crd && gridToWorld === void 0 ? (_reportPossibleCrUseOfgridToWorld({
                error: Error()
              }), gridToWorld) : gridToWorld)(x, y);
              tileNode.setPosition(pos.x, pos.y);
              this.node.addChild(tileNode); // 把 Tile 挂到 MapLayer 下

              tileNodes.push({
                node: tileNode,
                y: pos.y
              });
            }
          } // 2.5D 层级遮挡排序


          tileNodes.sort((a, b) => b.y - a.y);

          for (var i = 0; i < tileNodes.length; i++) {
            tileNodes[i].node.setSiblingIndex(i);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tileSpriteFrame", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1d2777afeff4e9b6c9364fdf8f26f71b8f2d36b5.js.map