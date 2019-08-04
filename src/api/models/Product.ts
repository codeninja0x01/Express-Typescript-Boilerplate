import { IsNotEmpty } from 'class-validator';
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { AttributeValue } from './AttributeValue';
import { Cart } from './Cart';
import { Category } from './Category';
import { OrderDetail } from './OrderDetail';
import { Review } from './Review';

@Entity()
export class Product {
    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column()
    @IsNotEmpty()
    public name: string;

    @Column()
    public description: string;

    @Column({type: 'double'})
    @IsNotEmpty()
    public price: number;

    @Column({type: 'double', default: '0.00', name: 'discounted_price'})
    @IsNotEmpty()
    public discountedPrice: number;

    @Column({name: 'image_1'})
    public image1: string;

    @Column({name: 'image_2'})
    public image2: string;

    @Column()
    public thumbnail: string;

    @Column({default: '1'})
    public display: boolean;

    @OneToMany(() => Review, reviews => reviews.product)
    public reviews: Review[];

    @OneToMany(type => OrderDetail, orders => orders.product)
    public orders: OrderDetail[];

    @OneToMany(() => Cart, carts => carts.product)
    public carts: Cart[];

    @ManyToMany(() => Category, categories => categories.products)
    @JoinTable({name: 'product_categories', joinColumns: [{name: 'product_id'}], inverseJoinColumns: [{name: 'category_id'}]})
    public categories: Category[];

    @ManyToMany(() => AttributeValue, attributes => attributes.products)
    @JoinTable({name: 'product_attributes', joinColumns: [{name: 'product_id'}], inverseJoinColumns: [{name: 'attribute_value_id'}]})
    public attributes: AttributeValue[];

}
