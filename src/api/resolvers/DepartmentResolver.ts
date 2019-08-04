import { Arg, Args, Ctx, FieldResolver, Query, Resolver, Root } from 'type-graphql';
import { Service } from 'typedi';

import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Context } from '../Context';
import { Category as CategoryModel } from '../models/Category';
import { Department as DepartmentModel } from '../models/Department';
import { Product as ProductModel } from '../models/Product';
import { CategoryService } from '../services/CategoryService';
import { DepartmentService } from '../services/DepartmentService';
import { ProductService } from '../services/ProductService';
import { Department } from '../types/Department';
import { PaginationInput } from '../types/input/PaginationInput';

@Service()
@Resolver(of => Department)
export class DepartmentResolver {

    constructor(
        private departmentService: DepartmentService,
        private categoryService: CategoryService,
        private productService: ProductService,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    @Query(() => [Department])
    public getDepartments(@Ctx() { requestId }: Context): Promise<DepartmentModel[]> {
        this.log.info(`{${requestId}} Find all department`);
        return this.departmentService.find();
    }

    @Query(() => [Department])
    public getDepartment(@Arg('id') id: number): Promise<DepartmentModel> {
        this.log.info(`Find one department`);
        return this.departmentService.findOne(id);
    }

    @FieldResolver()
    public async categories(@Root() department: DepartmentModel): Promise<CategoryModel[]> {
        return this.categoryService.findDepartment(department.id);
    }

    @FieldResolver()
    public async products(@Root() department: DepartmentModel, @Args() query?: PaginationInput): Promise<ProductModel[]> {
        return this.productService.findDepartment(department.id, query);
    }
}
