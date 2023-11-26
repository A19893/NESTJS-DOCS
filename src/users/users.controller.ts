import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
  ValidationPipe
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get() //Get or /users/?role=intern&age=23
  getUsers(@Query('role') role?: 'INTERN | ENGINEER | ADMIN'): {}[] {
    return this.userService.getUsers(role);
  }

  @Get(':id')
  getSpecificUser(@Param('id', ParseIntPipe) id: number): object {
    return this.userService.getSpecifcUser(id);
  }

  @Post()
  createUser(@Body(ValidationPipe) user: CreateUserDto): {} {
    return this.userService.createUser(user);
  }

  @Patch(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) user: UpdateUserDto,
  ): {} {
    return this.userService.updateUser(id, user);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number): {} {
    return this.userService.deleteUser(id);
  }
}
