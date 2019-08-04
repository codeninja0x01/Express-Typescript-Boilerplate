import { IsNotEmpty } from 'class-validator';
import {
    Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from 'typeorm';

import { Order } from './Order';

@Entity()
@CreateDateColumn()
export class Audit {
    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column()
    @IsNotEmpty()
    public message: string;

    @Column()
    @IsNotEmpty()
    public code: string;

    @Column({name: 'order_id'})
    public orderId: number;

    @ManyToOne(() => Order, order => order.audits)
    @JoinColumn({ name: 'order_id' })
    public order: Order;

}
