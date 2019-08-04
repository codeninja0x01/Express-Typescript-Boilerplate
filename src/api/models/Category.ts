import { IsNotEmpty } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Department } from './Department';
import { Product } from './Product';

@Entity()
export class Category {
    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column()
    @IsNotEmpty()
    public name: string;

    @Column()
    public description: string;

    @Column({name: 'department_id'})
    public departmentId: number;

    @ManyToMany(() => Product, product => product.categories)
    public products: Product[];

    @ManyToOne(() => Department, department => department.categories)
    @JoinColumn({ name: 'department_id' })
    public department: Department;
}
