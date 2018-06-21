'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Login = require('../views/Auth/Login.vue');

var _Login2 = _interopRequireDefault(_Login);

var _Register = require('../views/Auth/Register.vue');

var _Register2 = _interopRequireDefault(_Register);

var _Index = require('../views/Recipe/Index.vue');

var _Index2 = _interopRequireDefault(_Index);

var _Show = require('../views/Recipe/Show.vue');

var _Show2 = _interopRequireDefault(_Show);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

var router = new _vueRouter2.default({
    routes: [{ path: '/', component: _Index2.default }, { path: '/recipes/:id', component: _Show2.default }, { path: '/register', component: _Register2.default }, { path: '/login', component: _Login2.default }]
});

exports.default = router;
//# sourceMappingURL=index.js.map