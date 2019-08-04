import { IsNotEmpty } from 'class-validator';
import {
    Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from 'typeorm';

import { Customer } from './Customer';
import { Product } from './Product';

@Entity()
export class Review {
    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column()
    public review: string;

    @Column()
    @IsNotEmpty()
    public rating: number;

    @IsNotEmpty()
    @Column({name: 'product_id'})
    public productId: number;

    @Column({name: 'customer_id'})
    public customerId: number;

    @CreateDateColumn({name: 'created_on'})
    public createdAt: Date;

    @ManyToOne(() => Product, product => product.reviews)
    @JoinColumn({ name: 'product_id' })
    public product: Product;

    @ManyToOne(() => Customer, customer => customer.reviews)
    @JoinColumn({ name: 'customer_id' })
    public customer: Customer;

}
