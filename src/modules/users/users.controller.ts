import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { UpdateUsers, users } from "./users-dto/users.dto";
import { UsersRepository } from "./users.entity/users.entity";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService,
  ) { }

  @Post("/create")
  async createUser(@Body() users: users): Promise<UsersRepository> {
    return await this.usersService.createUser(users);
  }

  @Get("/get")
  async getUser():Promise<UsersRepository[]> {
    return await this.usersService.getUser();
  }

  @Get(":id")
  async getById(@Param('id') id:string): Promise<UsersRepository> {
    return await this.usersService.getbyId(+id);
  }

  @Patch(":id")
  async updateById(@Param('id') id:string,@Body() users:UpdateUsers): Promise<UsersRepository[]> {
    return await this.usersService.updateById(+id,users)
  }

  @Delete(":id")
  async deleteById(@Param('id') id:string):Promise<UsersRepository> {
    return await this.usersService.deleteById(+id)
  }
  
}