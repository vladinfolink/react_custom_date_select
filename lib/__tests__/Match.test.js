"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var ReactTestRenderer = tslib_1.__importStar(require("react-test-renderer"));
var CustomDropZone_1 = require("../components/react-custom-dropzone/containers/CustomDropZone/CustomDropZone");
var create = ReactTestRenderer.create;
describe("CustomDropZone component match", function () {
    expect.assertions(1);
    test("Matches the snapshot", function () {
        var dz = create(React.createElement(CustomDropZone_1.CustomDropZone, { fileTypesAllowed: ['asd'] }));
        expect(dz.toJSON()).toMatchSnapshot();
    });
});
//# sourceMappingURL=Match.test.js.map