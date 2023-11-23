import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsers(): [] {
    return [];
  }

  getSpecifcUser(): string {
    return 'Helo from specifci user';
  }

  createUser(): string {
    return 'Üser Created';
  }

  updateUser(): string {
    return 'User Updated';
  }

  deleteUser(): string {
    return 'User Deleted';
  }
}
