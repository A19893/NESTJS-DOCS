import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      email: 'user1@example.com',
      name: 'John Doe',
      role: 'ADMIN',
    },
    {
      id: 2,
      email: 'user2@example.com',
      name: 'Jane Doe',
      role: 'ENGINEER',
    },
    {
      id: 3,
      email: 'user3@example.com',
      name: 'Alice Smith',
      role: 'INTERN',
    },
    {
      id: 4,
      email: 'user4@example.com',
      name: 'Bob Johnson',
      role: 'ADMIN',
    },
    {
      id: 5,
      email: 'user5@example.com',
      name: 'Eva Williams',
      role: 'INTERN',
    },
  ];

  getUsers(role?: 'INTERN | ENGINEER | ADMIN'): {}[] {
    if (role) {
      const existingUser =  this.users.filter((item) => item.role === role);
      if(existingUser.length === 0) throw new NotFoundException("USER ROLE NOT FOUND")
    }

    return this.users;
  }
  getSpecifcUser(id: number): {} {
    const user = this.users.find((item) => item.id === id);
    if(!user) throw new NotFoundException('User Not Found')
    
    return user;
  }

  createUser(user: CreateUserDto): {} {
    const userHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: userHighestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(
    id: number,
    updatedUser: UpdateUserDto
    ){
    this.users= this.users.map((user) => {
      if(user.id === id){
          return {...user, ...updatedUser}
      }
      return user;
    })

    return this.users;
  }

  deleteUser(id: number): string {
    return "User Deleted"
  }
}
