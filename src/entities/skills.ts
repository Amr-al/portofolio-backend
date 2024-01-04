import {
    Entity,
    Column,
    BaseEntity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  @Entity("Skills")
  export class Skills extends BaseEntity {
    @PrimaryGeneratedColumn({
      type: "int",
    })
    id: number | undefined;
  
    @Column({
      type: "varchar",
    })
    image: string | undefined;

    @Column({
        type:"varchar"
    })
    name: string | undefined;

    @CreateDateColumn()
    created_at: Date | undefined;
  
    @UpdateDateColumn()
    updated_at: Date | undefined;
  }
  