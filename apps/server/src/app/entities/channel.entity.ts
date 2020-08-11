import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Channel {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    slug: string;

    @Column()
    name: string;

    @Column()
    createdAt: number;

}