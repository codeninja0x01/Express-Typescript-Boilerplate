import { IsNotEmpty } from 'class-validator';
import {
    Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from 'typeorm';

import { Product } from './Product';

@Entity()
@CreateDateColumn()
export class Cart {
    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column({name: 'cart_key'})
    @IsNotEmpty()
    public cartKey: string;

    @Column()
    @IsNotEmpty()
    public attribute: string;

    @Column()
    @IsNotEmpty()
    public quantity: number;

    @Column({default: true, name: 'buy_now'})
    public buyNow: boolean;

    @CreateDateColumn({name: 'created_on'})
    public createdAt: Date;

    @Column({name: 'product_id'})
    public productId: number;

    @ManyToOne(() => Product)
    @JoinColumn({ name: 'product_id' })
    public product: Product;
}
