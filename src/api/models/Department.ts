import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Category } from './Category';
import { Product } from './Product';

@Entity()
export class Department {
    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column()
    @IsNotEmpty()
    public name: string;

    @Column()
    public description: string;

    @OneToMany(type => Category, categories => categories.department)
    public categories: Category[];

    public products: Product[];

}
