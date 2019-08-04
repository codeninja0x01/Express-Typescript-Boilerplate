import { IsNotEmpty } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Order } from './Order';
import { Product } from './Product';

@Entity()
export class OrderDetail {
    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column()
    @IsNotEmpty()
    public attribute: string;

    @Column({name: 'product_name'})
    @IsNotEmpty()
    public productName: string;

    @Column()
    @IsNotEmpty()
    public quantity: number;

    @Column({type: 'double', name: 'unit_cost'})
    @IsNotEmpty()
    public unitCost: number;

    @Column({default: 'USD'})
    @IsNotEmpty()
    public currency: string;

    @Column({name: 'product_id'})
    public productId: number;

    @Column({name: 'order_id'})
    public orderId: number;

    @ManyToOne(() => Product, product => product.orders)
    @JoinColumn({ name: 'product_id' })
    public product: Product;

    @ManyToOne(() => Order, order => order.details)
    @JoinColumn({ name: 'order_id' })
    public order: Order;

}
