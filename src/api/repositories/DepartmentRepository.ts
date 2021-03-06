import { EntityRepository, Repository } from 'typeorm';

import { Department } from '../models/Department';

@EntityRepository(Department)
export class DepartmentRepository extends Repository<Department> {

}
