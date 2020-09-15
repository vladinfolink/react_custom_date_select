"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
exports.RejectedFiles = function (props) {
    var rejectedFileItems = props.rejectedFiles.map(function (rejectedFile, index) {
        return (React.createElement("div", { className: "rcd_fileName", key: rejectedFile.name + String(index) },
            React.createElement("span", { className: "rcd_fileNameContent" }, rejectedFile.name)));
    });
    return (React.createElement("div", { className: "reactCustomDropzoneRejectedFiles" },
        React.createElement("div", { className: "rejectedText" }, "Rejected files:"),
        React.createElement("div", { className: "rejectedFilesContainer" }, rejectedFileItems)));
};
//# sourceMappingURL=RejectedFiles.js.map