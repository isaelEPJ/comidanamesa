import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/features/auth-pages/model/users.model';

@Component({
  selector: 'app-profile-empresa-page',
  templateUrl: './profile-empresa-page.component.html',
  styleUrls: ['./profile-empresa-page.component.css'],
})
export class ProfileEmpresaPageComponent implements OnInit {
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
