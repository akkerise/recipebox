"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    state: {
        success: null,
        error: null
    },
    setSuccess: function setSuccess(message) {
        var _this = this;

        this.state.success = message;

        setTimeout(function () {
            _this.removeSuccess();
        }, 3000);
    },
    setError: function setError(message) {
        var _this2 = this;

        this.state.error = message;

        setTimeout(function () {
            _this2.removeError();
        }, 10000);
    },
    removeSuccess: function removeSuccess() {
        this.state.success = null;
    },
    removeError: function removeError() {
        this.state.error = null;
    }
};
//# sourceMappingURL=flash.js.map