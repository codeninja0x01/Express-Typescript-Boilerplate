import { LoggerInterface } from 'src/helper/logger';
import { Logger as TypeormLogger, QueryRunner } from 'typeorm';

import { Logger } from '../decorators/Logger';

export class LoggerTypeorm implements TypeormLogger {

    constructor(
        @Logger(__filename) private logger: LoggerInterface
    ) {}

    public log(level: 'log' | 'info' | 'warn', message: any, queryRunner?: QueryRunner): void {
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

    public logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner): void {
        this.logger.debug(query, parameters);
    }
    public logQueryError(error: string, query: string, parameters?: any[], queryRunner?: QueryRunner): void {
        this.logger.error(error, query);
    }
    public logQuerySlow(time: number, query: string, parameters?: any[], queryRunner?: QueryRunner): void {
        this.logger.info(query, time);
    }
    public logSchemaBuild(message: string, queryRunner?: QueryRunner): void {
        this.logger.debug(message);
    }
    public logMigration(message: string, queryRunner?: QueryRunner): void {
        this.logger.info(message);
    }

}
