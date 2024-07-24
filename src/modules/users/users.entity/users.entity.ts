import { InferAttributes, InferCreationAttributes } from "sequelize";
import { Column, Model, Table } from "sequelize-typescript";

@Table({ tableName: 'users' })
export class UsersRepository extends Model<InferCreationAttributes<UsersRepository>, InferAttributes<UsersRepository>> {

    @Column({ primaryKey: true, autoIncrement: true })
    id: number;

    @Column
    user_name:string;

    @Column
    user_email:string;

    @Column
    user_password:string;

    @Column
    user_age:number;

    @Column
    is_deleted:boolean
}
