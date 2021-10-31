import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/features/auth-pages/model/users.model';

@Component({
  selector: 'app-painel-gestor-page',
  templateUrl: './painel-gestor-page.component.html',
  styleUrls: ['./painel-gestor-page.component.css'],
})
export class PainelGestorPageComponent implements OnInit {
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
