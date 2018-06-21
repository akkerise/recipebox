'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.get = get;
exports.post = post;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _auth = require('../store/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function get(url) {
    return (0, _axios2.default)({
        method: 'GET',
        url: url,
        headers: {
            'Authorization': 'Bearer ' + _auth2.default.state.api_token
        }
    });
}

function post(url, data) {
    return (0, _axios2.default)({
        method: 'POST',
        url: url,
        data: data,
        headers: {
            'Authorization': 'Bearer ' + _auth2.default.state.api_token
        }
    });
}
//# sourceMappingURL=api.js.map