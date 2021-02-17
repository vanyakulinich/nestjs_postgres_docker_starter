import { BaseEntity } from 'src/common/entities/base.entity'
import { Column, Entity } from 'typeorm'

/**
 * User Entity
 */
@Entity('users')
export class User extends BaseEntity {
  @Column('varchar')
  firstName: string

  @Column('varchar')
  lastName: string

  // add more columns here
}
