import { Exclude } from 'class-transformer'
import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

/**
 * Base Entity with common columns
 */
export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Exclude({ toPlainOnly: true })
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date

  @Exclude({ toPlainOnly: true })
  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date
}
