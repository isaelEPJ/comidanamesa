import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../model/users.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  loginForm = new FormGroup({
    email: new FormControl(),
    senha: new FormControl(),
    typeUser: new FormControl(),
  });

  login(loginFormValue: FormGroup) {
    const formValue = loginFormValue.value;
    if (!formValue) {
      alert('erro na autenticaçao, preencha os campos');
    }
    this.users.map((usr) => {
      if (
        usr.email == formValue.email &&
        usr.password == formValue.senha &&
        usr.typeUser == formValue.typeUser
      ) {
        sessionStorage.setItem('currentUser', JSON.stringify(usr));
        switch (formValue.typeUser as String) {
          case 'usuario':
            this.router.navigateByUrl('/usuario/painel');
            break;

          case 'gestor':
            this.router.navigateByUrl('/gestor/painel');
            break;

          case 'empresa':
            this.router.navigateByUrl('/empresa/painel');
            break;
          default:
            return;
        }
        // if (formValue.typeUser == 'usuario') {
        //   this.router.navigateByUrl('/usuario/painel');
        // } else if (formValue.typeUser == 'gestor') {
        //   this.router.navigateByUrl('/gestor/painel');
        // } else if (formValue.typeUser == 'empresa') {
        //   this.router.navigateByUrl('/empresa/painel');
        // } else {
        //   this.router.navigateByUrl('/login');
        // }
      }
    });
  }
  SignOut() {
    sessionStorage.clear();
    return this.router.navigateByUrl('/login');
  }
  users: UserModel[] = [
    {
      id: 1,
      name: 'Isael junior',
      email: 'isael.ijj@gmail.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/70731079?v=4',
      password: '123',
      typeUser: 'usuario',
    },
    {
      id: 2,
      name: 'Gestor Joao',
      email: 'gestor@mail.com',
      imageUrl:
        'https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFya2V0JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      password: '1234',
      typeUser: 'gestor',
    },
    {
      id: 3,
      name: 'Delta corp',
      email: 'empresa@mail.com',
      imageUrl:
        'https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFya2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      password: '12345',
      typeUser: 'empresa',
    },
  ];
}
