import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

// test entity
@Entity()
export class TestData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: string;

  @Column()
  title: string;
}
