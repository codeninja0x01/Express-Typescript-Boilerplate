import { EntityRepository, Repository } from 'typeorm';

import { Category } from '../models/Category';

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {

    /**
     * Find by department_id is used for our data-loader to get all needed category in one query.
     */
    public findByDepartmentIds(ids: number[]): Promise<Category[]> {
        return this.createQueryBuilder()
            .select()
            .where(`category.department_id IN (${ids.map(id => `'${id}'`).join(', ')})`)
            .getMany();
    }

}
