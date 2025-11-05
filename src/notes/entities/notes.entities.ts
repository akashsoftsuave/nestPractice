import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('notes_data')
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  userId: number;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  description: string;

  @Column({ default: 0 })
  isDeleted: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column({ default: 0 })
  pin: number;

  @Column({ default: 0 })
  archive: number;
}
