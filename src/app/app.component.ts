import { Component } from '@angular/core';
import { Auth } from './models/auth.model';

import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  token = '';


  constructor(
    private usersService: UsersService,
    private authService: AuthService
  ) {

  }

  createUser() {
    this.usersService.create ({
      username: 'cflores',
      firstName: 'Carlos',
      lastName: 'Flores',
      password: '12',
      isAdmin: true
    })
    .subscribe(rta => {
      console.log(rta);
    })
  }

  login() {
    this.authService.login("user2", "12")
    .subscribe(rta => { //devuelve data del user
      console.log(rta.data.token);
      //localStorage.setItem('token', JSON.stringify({token: rta.data.token}));
      //this.token = rta.data.token;
    })
  }

  getUsers() {
    this.usersService.getAll()
    .subscribe(rta => {
      console.log(rta);
    })
  }

  getProfile() {
    this.authService.profiles()
    .subscribe(profiles => {
      console.log(profiles);
    })
  }

  logout() {
    this.authService.logout();
  }

  date() {
    let fechaActual = new Date;
    console.log(fechaActual);
  }
}
