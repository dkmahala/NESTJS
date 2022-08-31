import { Entity, JoinColumn, OneToMany, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm'


@Entity()
export class ProductEntity {
   @PrimaryGeneratedColumn("uuid")
   id: number

   @Column()
   pname: string

   @Column()
   price: number

   @Column()
   category: string

   @Column()
   description: string

   @CreateDateColumn()
   createdAt: String

   @UpdateDateColumn()
   updtedAt: String
}