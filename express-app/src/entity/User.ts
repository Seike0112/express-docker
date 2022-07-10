import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  readonly id?: number

  @Column({
    name: 'us_id',
    type: 'char',
    length: 16
  })
  usId: string;

  @Column({
    name: 'us_email',
    type: 'char',
    length: 64
  })
  usEmail: string;

  @Column({
    name: 'us_pass',
    type: 'char',
    length: 32
  })
  usPass: string;

  @Column({
    name: 'us_name',
    type: 'char',
    length: 32
  })
  usName: string;

  @Column({
    name: 'us_department',
    type: 'int',
  })
  usDepartment: number;

  @Column({
    name: 'us_position',
    type: 'int',
  })
  usPosition: number;

  @Column({
    name: 'us_create_date',
    type: 'timestamp',
    default: () => "now()",
    precision: 0,
  })
  readonly usCreateDate: Date;

  @Column({
    name: 'us_update_date',
    type: 'timestamp',
    default: () => "now()",
    precision: 0,
  })
  readonly usUpdateDate: Date;

  @Column()
  age: number

}
