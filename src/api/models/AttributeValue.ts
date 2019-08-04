import { IsNotEmpty } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Attribute } from './Attribute';
import { Product } from './Product';

@Entity()
export class AttributeValue {
    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column()
    @IsNotEmpty()
    public name: string;

    @Column({name: 'attribute_id'})
    public attributeId: number;

    @ManyToOne(() => Attribute, attribute => attribute.values)
    @JoinColumn({ name: 'attribute_id' })
    public attribute: Attribute;

    @ManyToMany(() => Product, product => product.attributes)
    public products: Product[];

}
