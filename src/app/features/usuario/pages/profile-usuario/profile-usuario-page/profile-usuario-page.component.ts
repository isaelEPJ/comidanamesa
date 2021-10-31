import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/features/auth-pages/model/users.model';

@Component({
  selector: 'app-profile-usuario-page',
  templateUrl: './profile-usuario-page.component.html',
  styleUrls: ['./profile-usuario-page.component.css'],
})
export class ProfileUsuarioPageComponent implements OnInit {
  user?: UserModel;
  constructor() {}

  ngOnInit(): void {
    const session = sessionStorage.getItem('currentUser');
    if (session) {
      const convertSession = JSON.parse(session);
      this.user = convertSession;
    }
  }
}
