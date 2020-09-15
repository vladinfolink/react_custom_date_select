"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var enzyme_1 = require("enzyme");
var ReactSixteenAdapter = tslib_1.__importStar(require("enzyme-adapter-react-16"));
var adapter = ReactSixteenAdapter;
enzyme_1.configure({ adapter: new adapter.default() });
//# sourceMappingURL=setupEnzyme.js.map