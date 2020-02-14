import {Injectable} from '@angular/core';
import {IUser} from './user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;

  loginUser(userName: string, password: string
  ) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Ozgur',
      lastName: 'Papa'
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firsName: string, lastName: string) {
    this.currentUser.firstName = firsName;
    this.currentUser.lastName = lastName;
  }
}
