"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var componentGate_1 = require("../componentGate");
var CustomDropzoneContainer_1 = require("../components/react-custom-dropzone/containers/CustomDropzoneContainer/CustomDropzoneContainer");
var Files_1 = require("../components/react-custom-dropzone/view/Files/Files");
var RejectedFiles_1 = require("../components/react-custom-dropzone/view/RejectedFiles/RejectedFiles");
var enzyme_1 = require("enzyme");
var react_test_renderer_1 = require("react-test-renderer");
var TestCustomDropZone = (function (_super) {
    tslib_1.__extends(TestCustomDropZone, _super);
    function TestCustomDropZone(props) {
        var _this = _super.call(this, props) || this;
        _this.handleDrop = function (fileItems) {
            var typesAllowed = _this.props.fileTypesAllowed.slice();
            var maxFileSize = _this.props.maxFileSize;
            var _a = _this.state, files = _a.files, rejectedFiles = _a.rejectedFiles;
            var inboundFiles = !!typesAllowed.length ? Array.from(fileItems).reduce(function (ini, item) {
                return (typesAllowed.indexOf(item.type) !== -1 && item.size <= maxFileSize)
                    ? tslib_1.__assign({}, ini, { files: ini.files.concat([item]) }) : tslib_1.__assign({}, ini, { rejectedFiles: ini.rejectedFiles.concat([item]) });
            }, { files: [], rejectedFiles: [] }) : {
                files: Array.from(fileItems), rejectedFiles: []
            };
            for (var _i = 0, _b = inboundFiles.files; _i < _b.length; _i++) {
                var iterator = _b[_i];
                if (files.length < _this.props.fileCountLimit) {
                    files.push(iterator);
                }
            }
            for (var _c = 0, _d = inboundFiles.rejectedFiles; _c < _d.length; _c++) {
                var iterator = _d[_c];
                if (rejectedFiles.length < _this.props.rejectedFileCountLimit) {
                    rejectedFiles.push(iterator);
                }
            }
            return _this.updateState({ files: files, rejectedFiles: rejectedFiles });
        };
        _this.deleteFile = function (fileIndex) {
            var files = _this.state.files.slice();
            files.splice(fileIndex, 1);
            _this.setState(function () {
                return { files: files };
            }, function () {
                _this.props.handleFiles(tslib_1.__assign({}, _this.state));
            });
        };
        _this.state = {
            files: [],
            rejectedFiles: []
        };
        _this.updateState = _this.updateState.bind(_this);
        _this.shouldDisplayFiles = _this.shouldDisplayFiles.bind(_this);
        return _this;
    }
    TestCustomDropZone.prototype.updateState = function (combinedFilesObj) {
        var _this = this;
        var files = combinedFilesObj.files, rejectedFiles = combinedFilesObj.rejectedFiles;
        this.setState(function () {
            return {
                files: files,
                rejectedFiles: rejectedFiles
            };
        }, function () {
            _this.props.handleFiles(tslib_1.__assign({}, _this.state));
        });
    };
    TestCustomDropZone.prototype.shouldDisplayFiles = function () {
        return this.props.displayFiles;
    };
    TestCustomDropZone.prototype.render = function () {
        var dropText = !this.state.files.length ? this.props.dropText : null;
        return (React.createElement(React.Fragment, null,
            React.createElement(CustomDropzoneContainer_1.CustomDropZoneContainer, { dropText: dropText, handleDrop: this.handleDrop, allowClick: this.props.allowClick },
                this.shouldDisplayFiles() && (React.createElement(Files_1.Files, { renderPics: this.props.renderPics, files: this.state.files, deleteFile: this.deleteFile })),
                !!this.state.rejectedFiles.length &&
                    this.props.displayRejectedFiles && (React.createElement(RejectedFiles_1.RejectedFiles, { rejectedFiles: this.state.rejectedFiles })))));
    };
    TestCustomDropZone.defaultProps = {
        renderPics: true,
        allowClick: true,
        displayFiles: true,
        displayRejectedFiles: true,
        fileCountLimit: Infinity,
        rejectedFileCountLimit: Infinity,
        dropText: '',
        handleFiles: function (params) {
            console.log(params);
        },
        fileTypesAllowed: [],
        maxFileSize: Infinity
    };
    return TestCustomDropZone;
}(React.Component));
exports.TestCustomDropZone = TestCustomDropZone;
it('render CustomDropZone', function () {
    expect(enzyme_1.shallow(React.createElement(componentGate_1.CustomDropZone, null)).length).toEqual(1);
});
describe("TestCustomDropZone component", function () {
    test("any", function () {
        var component = react_test_renderer_1.create(React.createElement(TestCustomDropZone, null));
        var instance = component.getInstance();
        expect(instance.props.dropText).toBe("");
        expect(enzyme_1.shallow(React.createElement(TestCustomDropZone, null))).toMatchSnapshot();
    });
});
//# sourceMappingURL=cdz.test.js.map