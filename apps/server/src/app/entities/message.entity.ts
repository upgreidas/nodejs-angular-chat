import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Message {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    room: string;

    @Column()
    body: string;

    @Column()
    timestamp: number;

}