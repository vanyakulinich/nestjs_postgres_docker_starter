import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

// EXAMPLE ENTITY

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('varchar')
  firstName: string

  @Column('varchar')
  lastName: string

  // add more columns
}
