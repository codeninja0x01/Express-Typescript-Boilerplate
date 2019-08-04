import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';

import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Department } from '../models/Department';
import { DepartmentRepository } from '../repositories/DepartmentRepository';

@Service()
export class DepartmentService {

    constructor(
        @OrmRepository() private departmentRepository: DepartmentRepository,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public find(): Promise<Department[]> {
        this.log.info('Find all department');
        return this.departmentRepository.find();
    }

    public findOne(id: number): Promise<Department | undefined> {
        this.log.info('Find one department');
        return this.departmentRepository.findOne({ id });
    }

}
