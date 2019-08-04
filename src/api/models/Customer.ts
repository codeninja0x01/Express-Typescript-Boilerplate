import * as bcrypt from 'bcrypt';
// import { Exclude } from 'class-transformer';
import { IsCreditCard, IsEmail, IsNotEmpty } from 'class-validator';
import {
    BeforeInsert, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn
} from 'typeorm';

// import { IsEmailAlreadyExist } from '../validators/IsEmailAlreadyExist';
import { Order } from './Order';
import { Review } from './Review';
import { ShippingRegion } from './ShippingRegion';

@Entity()
export class Customer {
    public static hashPassword(pwd: string): Promise<string> {
        return new Promise((resolve, reject) => {
            bcrypt.hash(pwd, 10, (err, hash) => {
                if (err) {
                    return reject(err);
                }
                resolve(hash);
            });
        });
    }

    public static comparePassword(customer: Customer, pwd: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            bcrypt.compare(pwd, customer.password, (err, res) => {
                resolve(res === true);
            });
        });
    }

    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column()
    @IsNotEmpty({groups: ['create', 'update']})
    public name: string;

    @Column()
    @IsEmail({allow_display_name: true}, {groups: ['create']})
    @IsNotEmpty({groups: ['create', 'update', 'login']})
    // @IsEmailAlreadyExist({
    //     message: 'Email $value already exists.',
    //     groups: ['create'],
    // })
    public email: string;

    @Column()
    @IsNotEmpty({groups: ['create', 'login']})
    // @Exclude({toPlainOnly: true})
    public password: string;

    @IsNotEmpty({groups: ['address']})
    @Column({name: 'address_1', nullable: true})
    public address1: string;

    @IsNotEmpty({groups: ['address']})
    @Column({name: 'address_2', nullable: true})
    public address2: string;

    @IsNotEmpty({groups: ['address']})
    @Column({nullable: true})
    public city: string;

    @IsNotEmpty({groups: ['address']})
    @Column({nullable: true})
    public region: string;

    @IsNotEmpty({groups: ['address']})
    @Column({name: 'postal_code', nullable: true})
    public postalCode: string;

    @IsNotEmpty({groups: ['address']})
    @Column({nullable: true})
    public country: string;

    @Column({name: 'day_phone', nullable: true})
    public dayPhone: string;

    @Column({name: 'eve_phone', nullable: true})
    public evePhone: string;

    @Column({name: 'mob_phone', nullable: true})
    public mobPhone: string;

    @IsNotEmpty({groups: ['card']})
    @IsCreditCard({groups: ['card']})
    @Column({name: 'credit_card', nullable: true})
    public creditCard: string;

    @IsNotEmpty({groups: ['address']})
    @Column({name: 'shipping_region_id'})
    public shippingRegionId: number;

    @ManyToOne(() => ShippingRegion)
    @JoinColumn({ name: 'shipping_region_id' })
    public shippingRegion: ShippingRegion;

    @OneToMany(() => Order, order => order.customer)
    public orders: Order[];

    @OneToMany(() => Review, reviews => reviews.customer)
    public reviews: Review[];

    public toString(): string {
        return this.name;
    }

    @BeforeInsert()
    public async hashPassword(): Promise<void> {
        this.password = await Customer.hashPassword(this.password);
    }

}
