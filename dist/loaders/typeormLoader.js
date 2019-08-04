"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const ormconfig_1 = tslib_1.__importDefault(require("../../ormconfig"));
exports.typeormLoader = (settings) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const loadedConnectionOptions = yield typeorm_1.getConnectionOptions();
    const connectionOptions = Object.assign(loadedConnectionOptions, ormconfig_1.default);
    const connection = yield typeorm_1.createConnection(connectionOptions);
    if (settings) {
        settings.setData('connection', connection);
        settings.onShutdown(() => connection.close());
    }
});
//# sourceMappingURL=typeormLoader.js.map