"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var File_1 = require("./File");
exports.Files = function (props) {
    var fileItems = props.files.map(function (file, index) {
        return (React.createElement("div", { className: "rcd_fileName", key: file.name + String(index) },
            React.createElement(File_1.File, { index: index, file: file, renderPics: props.renderPics, deleteFile: props.deleteFile })));
    });
    return (React.createElement("div", { className: "reactCustomDropzoneFiles" },
        React.createElement("div", { className: "allowedFilesContainer" },
            !!props.files.length,
            " ",
            fileItems)));
};
//# sourceMappingURL=Files.js.map