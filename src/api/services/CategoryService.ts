import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';

import { Logger, LoggerInterface } from '../../decorators/Logger';
import { PaginationRequest } from '../controllers/requests/PaginationRequest';
import { Category } from '../models/Category';
import { CategoryRepository } from '../repositories/CategoryRepository';

@Service()
export class CategoryService {

    constructor(
        @OrmRepository() private categoryRepository: CategoryRepository,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public find(query: PaginationRequest): Promise<Category[]> {
        this.log.info('Find all category');
        const limit = query.limit ? query.limit : 20;
        const offset = ((query.offset ? query.offset : 1) - 1) * limit;

        return this.categoryRepository
            .createQueryBuilder()
            .limit(limit)
            .orderBy(query.order, query.orderBy)
            .offset(offset)
            .cache(true)
            .getMany();
    }

    public findOne(id: number): Promise<Category | undefined> {
        this.log.info('Find one category');
        return this.categoryRepository.findOne({ id });
    }

    public async findProduct(id: number): Promise<Category[] | undefined> {
        this.log.info('Find category products');
        return await this.categoryRepository
            .createQueryBuilder('category')
            .select(['category.id', 'category.name', 'category.description', 'category.departmentId'])
            .leftJoin('category.products', 'product')
            .where('product.id = :id', {id})
            .cache(true)
            .getMany();
    }

    public findDepartment(id: number): Promise<Category[] | undefined> {
        this.log.info('Find category department');
        return this.categoryRepository.find({ where: { departmentId: id } });
    }

}
