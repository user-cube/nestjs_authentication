import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false, unique: true })
  email: string;
  @Column({ nullable: false })
  password: string;
}
