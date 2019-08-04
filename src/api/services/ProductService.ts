import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';

import { Logger, LoggerInterface } from '../../decorators/Logger';
import { PaginationRequest } from '../controllers/requests/PaginationRequest';
import { SearchRequest } from '../controllers/requests/SearchRequest';
import { Customer } from '../models/Customer';
import { Department } from '../models/Department';
import { Product } from '../models/Product';
import { Review } from '../models/Review';
import { CategoryRepository } from '../repositories/CategoryRepository';
import { ProductRepository } from '../repositories/ProductRepository';
import { ReviewRepository } from '../repositories/ReviewRepository';

@Service()
export class ProductService {

    constructor(
        @OrmRepository() private productRepository: ProductRepository,
        @OrmRepository() private categoryRepository: CategoryRepository,
        @OrmRepository() private reviewRepository: ReviewRepository,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public find(query: PaginationRequest): Promise<Product[]> {
        this.log.info('Find all product');
        const limit = query.limit ? query.limit : 20;
        const offset = ((query.offset ? query.offset : 1) - 1) * limit;

        return this.productRepository
            .createQueryBuilder()
            .take(limit)
            .orderBy(query.order, query.orderBy)
            .skip(offset)
            .getMany();
    }

    public findOne(id: number): Promise<Product | undefined> {
        this.log.info('Find one product');
        return this.productRepository.findOne({ id });
    }

    public search(query: SearchRequest): Promise<Product[] | undefined> {
        this.log.info('Search product');
        const limit = query.limit ? query.limit : 20;
        const descLength = query.descLength ? query.descLength : 200;
        const offset = ((query.offset ? query.offset : 1) - 1) * limit;

        return this.productRepository
            .createQueryBuilder()
            .select(['id', 'name', 'price', 'discounted_price', 'thumbnail'])
            .addSelect('IF(LENGTH(description) <= :length, description, CONCAT(LEFT(description, :length), \' ...\'))', 'description')
            .where('MATCH (name, description) AGAINST (:str IN BOOLEAN MODE)')
            .orderBy('MATCH (name, description) AGAINST (:str IN NATURAL LANGUAGE MODE)', 'DESC')
            .setParameter('str', query.search)
            .setParameter('length', descLength)
            .skip(offset)
            .take(limit)
            .cache(true)
            .getRawMany();
    }

    public async findCategory(categoryId: number, query: PaginationRequest): Promise<Product[] | undefined> {
        this.log.info('Find product by category');
        const limit = query.limit ? query.limit : 20;
        const offset = ((query.offset ? query.offset : 1) - 1) * limit;

        const products = await this.productRepository
            .createQueryBuilder('product')
            .innerJoin('product.categories', 'category')
            .take(limit)
            .skip(offset)
            .where('category.id = :categoryId', {categoryId})
            .cache(true)
            .getMany();
        return products;
    }

    public async findDepartment(departmentId: number, query: PaginationRequest): Promise<Product[] | undefined> {
        this.log.info('Find product by category');
        const limit = query.limit ? query.limit : 20;
        const offset = ((query.offset ? query.offset : 1) - 1) * limit;

        const products = await this.productRepository
            .createQueryBuilder('product')
            .innerJoin('product.categories', 'category')
            .take(limit)
            .skip(offset)
            .where('category.departmentId = :departmentId', {departmentId})
            .cache(true)
            .getMany();
        return products;
    }

    public async findLocation(id: number): Promise<any[] | undefined> {
        this.log.info('Find product by category');
        const products = await this.categoryRepository
            .createQueryBuilder('category')
            .select(['category.id', 'category.name', 'category.department_id'])
            .addSelect(subQuery => {
                return subQuery.select('name').from(Department, 'department').where('id = category.department_id');
            }, 'department_name')
            .where(qb => {
                const subQuery = qb.subQuery()
                    .select('category_id')
                    .from('product_categories', 'product_category')
                    .where('product_id = :id')
                    .getQuery();
                return 'category.id IN ' + subQuery;
            })
            .setParameter('id', id)
            .cache(true)
            .getRawMany();
        return products;
    }

    public async findReview(id: number): Promise<any[] | undefined> {
        this.log.info('Find product review');
        const reviews = await this.reviewRepository
            .createQueryBuilder('review')
            .innerJoin('review.customer', 'customer')
            .select('customer.name')
            .addSelect('review.review', 'review')
            .addSelect('review.rating', 'rating')
            .addSelect('review.created_on', 'created_on')
            .where('review.product_id = :id', {id})
            .cache(true)
            .getRawMany();
        return reviews;
    }

    public async createReview(review: Review, customer: Customer): Promise<Review[] | undefined> {
        this.log.info('Create product review');
        review.customerId = customer.id;
        await this.reviewRepository.save(review);
        return this.findReview(review.productId);
    }
}
