import { PartialType } from '@nestjs/mapped-types';

export class users {
    id:number;
    user_name:string;
    user_email:string;
    user_password:string;
    user_age:number;
    is_deleted:boolean
}

export class UpdateUsers extends PartialType(users) {}
