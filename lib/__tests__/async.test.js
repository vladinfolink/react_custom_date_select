"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var axios = tslib_1.__importStar(require("axios"));
it('fetch', function (done) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var res;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    expect.assertions(1);
                    return [4, axios.get('https://jsonplaceholder.typicode.com/todos/1')];
                case 1:
                    res = _a.sent();
                    expect(!!res).toBe(true);
                    done();
                    return [2];
            }
        });
    });
});
//# sourceMappingURL=async.test.js.map