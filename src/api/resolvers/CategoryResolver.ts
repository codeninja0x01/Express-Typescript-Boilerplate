import DataLoader from 'dataloader';
import { Arg, Args, FieldResolver, Query, Resolver, Root } from 'type-graphql';
import { Service } from 'typedi';

import { DLoader } from '../../decorators/DLoader';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Category as CategoryModel } from '../models/Category';
import { Department as DepartmentModel } from '../models/Department';
import { Product as ProductModel } from '../models/Product';
import { CategoryService } from '../services/CategoryService';
import { ProductService } from '../services/ProductService';
import { Category } from '../types/Category';
import { PaginationInput } from '../types/input/PaginationInput';

@Service()
@Resolver(of => Category)
export class CategoryResolver {

    constructor(
        private categoryService: CategoryService,
        private productService: ProductService,
        @DLoader(DepartmentModel) private CategoryLoader: DataLoader<number, DepartmentModel>,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    @Query(() => [Category])
    public getCategories(@Args() query?: PaginationInput): Promise<CategoryModel[]> {
        this.log.info(`Find all Category`);
        return this.categoryService.find(query);
    }

    @Query(() => [Category])
    public getCategory(@Arg('id') id: number): Promise<CategoryModel> {
        this.log.info(`Find one Category`);
        return this.categoryService.findOne(id);
    }

    @FieldResolver()
    public async department(@Root() category: CategoryModel): Promise<DepartmentModel | undefined> {
        if (category.departmentId === undefined) { return undefined; }
        return this.CategoryLoader.load(category.departmentId);
    }

    @FieldResolver()
    public async products(@Root() category: CategoryModel, @Args() query?: PaginationInput): Promise<ProductModel[] | undefined> {
        return this.productService.findCategory(category.id, query);
    }
}
