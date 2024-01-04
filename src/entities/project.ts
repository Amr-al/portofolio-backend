import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("Project")
export class Projects extends BaseEntity {
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
  mainImage: string | undefined;

  @Column({
    type: "simple-array",
    default: [],
    nullable: true,
  })
  image: string[] | undefined;

  @Column({
    type: "varchar",
    nullable: true,
  })
  github: string | undefined;

  @Column({
    type: "varchar",
    nullable: true,
  })
  link: string | undefined;

  @Column({
    type: "varchar",
    nullable: true,
  })
  demo: string | undefined;

  @Column({
    type: "simple-array",
    default: [],
    nullable: true,
  })
  tools: string[] | undefined;

  @Column({
    type: "simple-array",
    nullable: true,
  })
  description: string[] | undefined;

  @CreateDateColumn()
  created_at: Date | undefined;

  @UpdateDateColumn()
  updated_at: Date | undefined;
}
