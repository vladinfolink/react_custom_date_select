"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var ReactDOM = tslib_1.__importStar(require("react-dom"));
var App_1 = tslib_1.__importDefault(require("./App"));
var registerServiceWorker_1 = tslib_1.__importDefault(require("./registerServiceWorker"));
ReactDOM.render(React.createElement(App_1.default, null), document.getElementById('root'));
registerServiceWorker_1.default();
//# sourceMappingURL=index.js.map