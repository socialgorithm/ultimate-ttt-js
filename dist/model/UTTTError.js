"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var UTTTError = (function (_super) {
    __extends(UTTTError, _super);
    function UTTTError(message, code) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.code = code;
        return _this;
    }
    return UTTTError;
}(Error));
exports.default = UTTTError;
//# sourceMappingURL=UTTTError.js.map