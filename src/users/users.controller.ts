import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  getUsers(): [] {
    return this.userService.getUsers();
  }

  @Get(':id')
  getSpecificUser(): string {
    return this.userService.getSpecifcUser();
  }

  @Post()
  createUser(): string {
    return this.userService.createUser();
  }

  @Patch(':id')
  updateUser(@Param('id') id: string): string {
    return { id };
  }

  @Delete(':id')
  deleteUser(): string {
    return this.userService.deleteUser();
  }
}
