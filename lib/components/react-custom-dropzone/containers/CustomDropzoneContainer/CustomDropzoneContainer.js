"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var DragTarget_1 = require("../DragTarget/DragTarget");
var CustomDropZoneContainer = (function (_super) {
    tslib_1.__extends(CustomDropZoneContainer, _super);
    function CustomDropZoneContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            userIsDragging: false,
            dragCounter: 0
        };
        _this.handleDrag = _this.handleDrag.bind(_this);
        _this.handleDragIn = _this.handleDragIn.bind(_this);
        _this.handleDragOut = _this.handleDragOut.bind(_this);
        _this.handleDrop = _this.handleDrop.bind(_this);
        return _this;
    }
    CustomDropZoneContainer.prototype.handleDrag = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    CustomDropZoneContainer.prototype.handleDragIn = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState(function (state) {
            return {
                dragCounter: state.dragCounter + 1
            };
        });
        if (event.dataTransfer.items) {
            this.setState(function () {
                return { userIsDragging: true };
            });
        }
    };
    CustomDropZoneContainer.prototype.handleDragOut = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState(function () {
            return {
                dragCounter: 0,
                userIsDragging: false
            };
        });
        if (this.state.dragCounter === 0) {
            this.setState(function () {
                return { userIsDragging: false };
            });
        }
    };
    CustomDropZoneContainer.prototype.handleDrop = function (event) {
        event.preventDefault();
        event.stopPropagation();
        var files = (event.dataTransfer || event.target).files;
        if (files) {
            this.props.handleDrop(files);
            if (event.dataTransfer)
                event.dataTransfer.clearData();
            this.setState(function (state) {
                return {
                    dragCounter: 0,
                    userIsDragging: false
                };
            });
        }
    };
    CustomDropZoneContainer.prototype.render = function () {
        var dropText = this.props.dropText;
        var userIsDragging = this.state.userIsDragging;
        return (React.createElement(DragTarget_1.DragTarget, { userIsDragging: userIsDragging, allowClick: this.props.allowClick, handleDragIn: this.handleDragIn, handleDragOut: this.handleDragOut, handleDrag: this.handleDrag, handleDrop: this.handleDrop, dropText: dropText }, this.props.children));
    };
    return CustomDropZoneContainer;
}(React.Component));
exports.CustomDropZoneContainer = CustomDropZoneContainer;
//# sourceMappingURL=CustomDropzoneContainer.js.map