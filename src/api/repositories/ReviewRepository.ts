import { EntityRepository, Repository } from 'typeorm';

import { Review } from '../models/Review';

@EntityRepository(Review)
export class ReviewRepository extends Repository<Review> {

}
