import { IsNotEmpty } from 'class-validator';
import {
    Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn
} from 'typeorm';

import { Audit } from './Audit';
import { Customer } from './Customer';
import { OrderDetail } from './OrderDetail';
import { Shipping } from './Shipping';
import { Tax } from './Tax';

@Entity({name: 'orders'})
@CreateDateColumn()
export class Order {
    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column({name: 'total_amount'})
    public totalAmount: number;

    @Column({name: 'shipped_on', type: 'datetime'})
    public shippedOn: Date;

    @Column({default: '0'})
    @IsNotEmpty()
    public status: number;

    @Column({nullable: true})
    public comments: string;

    @Column({name: 'auth_code', nullable: true})
    public authCode: string;

    @Column({nullable: true})
    public reference: string;

    @Column({name: 'customer_id'})
    public customerId: number;

    @Column({name: 'tax_id'})
    @IsNotEmpty()
    public taxId: number;

    @Column({name: 'shipping_id'})
    @IsNotEmpty()
    public shippingId: number;

    @CreateDateColumn({name: 'created_on'})
    public createdAt: Date;

    @ManyToOne(() => Customer, customer => customer.orders)
    @JoinColumn({ name: 'customer_id' })
    public customer: Customer;

    @ManyToOne(() => Tax)
    @JoinColumn({ name: 'tax_id' })
    public tax: Tax;

    @ManyToOne(() => Shipping)
    @JoinColumn({ name: 'shipping_id' })
    public shipping: Shipping;

    @OneToMany(() => Audit, audit => audit.order)
    public audits: Audit[];

    @OneToMany(() => OrderDetail, detail => detail.order)
    public details: OrderDetail[];
}
