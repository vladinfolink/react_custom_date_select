"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var ReactDOM = tslib_1.__importStar(require("react-dom"));
var App_1 = tslib_1.__importDefault(require("../App"));
it('App renders without crashing', function () {
    var div = document.createElement('div');
    ReactDOM.render(React.createElement(App_1.default, null), div);
    ReactDOM.unmountComponentAtNode(div);
});
//# sourceMappingURL=App.test.js.map