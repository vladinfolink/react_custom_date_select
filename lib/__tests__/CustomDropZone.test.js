"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var ReactDOM = tslib_1.__importStar(require("react-dom"));
var CustomDropZone_1 = require("../components/react-custom-dropzone/containers/CustomDropZone/CustomDropZone");
it('Accepts faulty mime types', function (done) {
    var div = document.createElement('div');
    ReactDOM.render(React.createElement(CustomDropZone_1.CustomDropZone, { fileTypesAllowed: ['asdasd'] }), div);
    ReactDOM.unmountComponentAtNode(div);
    done();
});
//# sourceMappingURL=CustomDropZone.test.js.map