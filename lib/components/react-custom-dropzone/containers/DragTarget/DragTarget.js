"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var DragTarget = (function (_super) {
    tslib_1.__extends(DragTarget, _super);
    function DragTarget(props) {
        var _this = _super.call(this, props) || this;
        _this.filesAddedHandler = _this.filesAddedHandler.bind(_this);
        _this.openDialogue = _this.openDialogue.bind(_this);
        _this.inputRef = React.createRef();
        return _this;
    }
    DragTarget.prototype.filesAddedHandler = function (event) {
        this.props.handleDrop(event);
        event.target.value = "";
    };
    DragTarget.prototype.openDialogue = function () {
        if (!this.inputRef.current)
            return;
        return this.props.allowClick ? this.inputRef.current.click() : null;
    };
    DragTarget.prototype.render = function () {
        var _a = this.props, userIsDragging = _a.userIsDragging, handleDragIn = _a.handleDragIn, handleDragOut = _a.handleDragOut, handleDrag = _a.handleDrag, handleDrop = _a.handleDrop;
        return (React.createElement("div", { onClick: this.openDialogue, onDragEnter: handleDragIn, onDragLeave: handleDragOut, onDragOver: handleDrag, onDrop: handleDrop, className: userIsDragging ? "rcd_dropZoneTargetIsDragging" : "rcd_dropZoneTarget" },
            this.props.dropText,
            this.props.children,
            this.props.allowClick && (React.createElement("input", { style: { display: "none" }, ref: this.inputRef, onChange: this.filesAddedHandler, type: "file", multiple: true }))));
    };
    return DragTarget;
}(React.Component));
exports.DragTarget = DragTarget;
//# sourceMappingURL=DragTarget.js.map