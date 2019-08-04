import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { AttributeValue } from './AttributeValue';

@Entity()
export class Attribute {
    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column()
    @IsNotEmpty()
    public name: string;

    @OneToMany(() => AttributeValue, value => value.attribute)
    public values?: AttributeValue[];

}
