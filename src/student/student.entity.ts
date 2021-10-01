import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  firstName: string;

  @Column({
    nullable: true,
  })
  lastName: string;
}
