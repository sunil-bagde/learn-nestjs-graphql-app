import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;
}
