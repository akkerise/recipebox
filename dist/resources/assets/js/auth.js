'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by akke on 6/26/17.
 */
exports.default = {
    state: {
        api_token: null,
        user_id: null
    },
    initialize: function initialize() {
        this.state.api_token = localStorage.getItem('api_token');
        this.state.user_id = localStorage.getItem('user_id');
    },
    set: function set(api_token, user_id) {
        localStorage.setItem('api_token', api_token);
        localStorage.setItem('user_id', user_id);
    },
    remove: function remove() {
        localStorage.removeItem('api_token');
        localStorage.removeItem('user_id');
        this.initialize();
    }
};
//# sourceMappingURL=auth.js.map