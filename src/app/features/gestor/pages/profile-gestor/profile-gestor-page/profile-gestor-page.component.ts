import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/features/auth-pages/model/users.model';

@Component({
  selector: 'app-profile-gestor-page',
  templateUrl: './profile-gestor-page.component.html',
  styleUrls: ['./profile-gestor-page.component.css'],
})
export class ProfileGestorPageComponent implements OnInit {
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
