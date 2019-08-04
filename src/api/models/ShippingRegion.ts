import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Shipping } from './Shipping';

@Entity()
export class ShippingRegion {
    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column()
    @IsNotEmpty()
    public title: string;

    @OneToMany(() => Shipping, shipping => shipping.shippingRegion)
    public shippings: Shipping[];

}
