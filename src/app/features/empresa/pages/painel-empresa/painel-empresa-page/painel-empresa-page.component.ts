import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/features/auth-pages/model/users.model';

@Component({
  selector: 'app-painel-empresa-page',
  templateUrl: './painel-empresa-page.component.html',
  styleUrls: ['./painel-empresa-page.component.css'],
})
export class PainelEmpresaPageComponent implements OnInit {
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
