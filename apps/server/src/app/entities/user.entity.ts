import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

export enum UserRole {
  MEMBER = 1,
  MODERATOR = 2,
  ADMIN = 3
}

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column({
      nullable: true
    })
    avatarPath: string;

    @Column()
    password: string;

    @Column({
      default: UserRole.MEMBER
    })
    role: UserRole;

    @Column()
    createdAt: number;

}