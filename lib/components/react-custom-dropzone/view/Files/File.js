"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var File = (function (_super) {
    tslib_1.__extends(File, _super);
    function File(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            imageSource: ''
        };
        _this.doesReturnImage = _this.doesReturnImage.bind(_this);
        _this.handleImage = _this.handleImage.bind(_this);
        return _this;
    }
    File.prototype.componentDidMount = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (this.props.renderPics)
                    this.handleImage();
                return [2];
            });
        });
    };
    File.prototype.doesReturnImage = function () {
        return this.props.file.type.split("/")[0] === "image";
    };
    File.prototype.handleImage = function () {
        var _this = this;
        (function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var reader;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        reader = new window.FileReader();
                        return [4, reader.readAsDataURL(this.props.file)];
                    case 1:
                        _a.sent();
                        reader.onload = function () {
                            _this.setState(function () {
                                var result = reader.result;
                                return {
                                    imageSource: result
                                };
                            });
                        };
                        return [2];
                }
            });
        }); })();
    };
    File.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            this.props.renderPics && this.doesReturnImage() && (React.createElement("img", { className: "rcd_imgUnit", src: this.state.imageSource, alt: this.props.file.name })),
            React.createElement("span", { className: "rcd_fileNameContent" }, this.props.file.name),
            React.createElement("button", { onClick: function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    _this.props.deleteFile.apply(_this.props.index);
                }, className: "rcd_deleteButton" })));
    };
    return File;
}(React.Component));
exports.File = File;
//# sourceMappingURL=File.js.map