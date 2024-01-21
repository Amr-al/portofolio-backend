import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("Message")
export class Message extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: "int",
  })
  id: number | undefined;

  @Column({
    type: "varchar",
    nullable: true,
  })
  name: string | undefined;

  @Column({
    type: "varchar",
    nullable: true,
  })
  email: string | undefined;

  @Column({
    type: "varchar",
    nullable: true,
  })
  message: string | undefined;

  @CreateDateColumn()
  created_at: Date | undefined;

  @UpdateDateColumn()
  updated_at: Date | undefined;
}
