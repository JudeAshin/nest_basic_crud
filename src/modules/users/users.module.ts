import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersService } from './users.service';
import { UsersRepository } from './users.entity/users.entity';
import { UsersController } from './users.controller';

@Module({
  imports: [SequelizeModule.forFeature([UsersRepository])],
  controllers:[UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
