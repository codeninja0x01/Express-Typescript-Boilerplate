import { Arg, Args, Ctx, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql';
import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';

import { Context } from '../Context';
import { AttributeValue as AttributeValueModel } from '../models/AttributeValue';
import { Category as CategoryModel } from '../models/Category';
import { Product as ProductModel } from '../models/Product';
import { Review as ReviewModel } from '../models/Review';
import { ReviewRepository } from '../repositories/ReviewRepository';
import { AttributeService } from '../services/AttributeService';
import { CategoryService } from '../services/CategoryService';
import { ProductService } from '../services/ProductService';
import { PaginationInput } from '../types/input/PaginationInput';
import { ReviewInput } from '../types/input/ReviewInput';
import { SearchInput } from '../types/input/SearchInput';
import { Product } from '../types/Product';
import { Review } from '../types/Review';

@Service()
@Resolver(() => Product)
export class ProductResolver {

    constructor(
        private productService: ProductService,
        private attributeService: AttributeService,
        private categoryService: CategoryService,
        @OrmRepository() private reviewRepository: ReviewRepository
    ) { }

    /** TODO Authentication */
    @Mutation(() => Review)
    public async addReview(@Arg('review') body: ReviewInput): Promise<ReviewModel> {
        const review = new ReviewModel();
        review.rating = body.rating;
        review.review = body.review;
        review.productId = body.productId;
        review.customerId = body.customerId;
        return this.reviewRepository.save(review);
    }

    @Query(() => [Product])
    public getProducts(@Args() query: PaginationInput): Promise<ProductModel[]> {
        return this.productService.find(query);
    }

    @Query(() => Product || undefined)
    public getProduct(@Arg('id', {nullable: false}) id: number,  @Ctx() {customer}: Context): Promise<ProductModel> | undefined {
        return this.productService.findOne(id);
    }

    @Query(() => [Product])
    public searchProduct(@Args() query: SearchInput): Promise<ProductModel[]> {
        return this.productService.search(query);
    }

    @FieldResolver()
    public async attributes(@Root() product: ProductModel): Promise<AttributeValueModel[]> {
        return this.attributeService.findProduct(product.id);
    }

    @FieldResolver()
    public async categories(@Root() product: ProductModel): Promise<CategoryModel[]> {
        return this.categoryService.findProduct(product.id);
    }

    @FieldResolver()
    public async reviews(@Root() product: ProductModel): Promise<ReviewModel[]> {
        return this.productService.findReview(product.id);
    }

}
