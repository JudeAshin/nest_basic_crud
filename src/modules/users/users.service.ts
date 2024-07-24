import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { UsersRepository } from './users.entity/users.entity';
import { UpdateUsers, users } from './users-dto/users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UsersRepository) private usersModel: typeof UsersRepository,
    // private sequelize: Sequelize,
  ) {}


    async createUser(users: users): Promise<UsersRepository> {
        return await this.usersModel.create(users);
    }

    async getUser(): Promise<UsersRepository[]> {
        try {
            return await this.usersModel.findAll();
        } catch (error) {
            console.error('Error getting user service:', error);
        }
    }

    async getbyId(id: number): Promise<UsersRepository> {
        try {
            return await this.usersModel.findByPk(id);
        } catch (error) {
            console.error('Error getting Auser', error);
        }
    }

    async updateById(id: number, updateUser: UpdateUsers): Promise<UsersRepository[]> {
        try {
            const existingUser = await this.usersModel.findByPk(id);
            const updateuser = await this.usersModel.update(updateUser, { where: { id }, returning: true });
            return updateuser[1];
        } catch (error) {
            console.error('Error updating user:', error);
        }
    }

    async deleteById(id: number): Promise<UsersRepository> {
        try {
            const data = await this.usersModel.findByPk(id);
            data.is_deleted = true;
            data.deletedAt = new Date();
            await data.save();
            return
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    }

}