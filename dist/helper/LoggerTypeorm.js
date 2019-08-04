"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Logger_1 = require("../decorators/Logger");
let LoggerTypeorm = class LoggerTypeorm {
    constructor(logger) {
        this.logger = logger;
    }
    log(level, message, queryRunner) {
        switch (level) {
            case 'info':
                this.logger.info(message);
                break;
            case 'log':
                this.logger.debug(message);
                break;
            case 'warn':
                this.logger.warn(message);
                break;
            default:
                break;
        }
    }
    logQuery(query, parameters, queryRunner) {
        this.logger.debug(query, parameters);
    }
    logQueryError(error, query, parameters, queryRunner) {
        this.logger.error(error, query);
    }
    logQuerySlow(time, query, parameters, queryRunner) {
        this.logger.info(query, time);
    }
    logSchemaBuild(message, queryRunner) {
        this.logger.debug(message);
    }
    logMigration(message, queryRunner) {
        this.logger.info(message);
    }
};
LoggerTypeorm = tslib_1.__decorate([
    tslib_1.__param(0, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [Object])
], LoggerTypeorm);
exports.LoggerTypeorm = LoggerTypeorm;
//# sourceMappingURL=LoggerTypeorm.js.map