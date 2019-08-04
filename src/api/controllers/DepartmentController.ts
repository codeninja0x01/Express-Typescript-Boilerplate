import { Get, JsonController, OnUndefined, Params } from 'routing-controllers';

import { NotFoundError } from '../errors/NotFoundError';
import { Department } from '../models/Department';
import { DepartmentService } from '../services/DepartmentService';
import { IdRequest } from './requests/IdRequest';

@JsonController('/departments')
export class DepartmentController {

    constructor(
        private departmentService: DepartmentService
    ) { }

    @Get()
    public find(): Promise<Department[]> {
        return this.departmentService.find();
    }

    @Get('/:id')
    @OnUndefined(NotFoundError)
    public one(@Params() idRequest: IdRequest): Promise<Department | undefined> {
        return this.departmentService.findOne(idRequest.id);
    }
}
