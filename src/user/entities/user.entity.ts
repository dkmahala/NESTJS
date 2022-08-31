import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
   @PrimaryGeneratedColumn()
   id: number

   @Column()
   username: string

   @Column()
   password: string

   @Column()
   role: string
   default: "No"

   @Column()
   email: string

   @Column()
   address: string

   @CreateDateColumn()
   createdAt : String

   @UpdateDateColumn()
   updtedAt : String
}