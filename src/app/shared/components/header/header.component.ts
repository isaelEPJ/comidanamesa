import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/features/auth-pages/model/users.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  currentUser?: UserModel;
  @Input() titleHeader?: string;
  @Input() nameUser?: string;
  user?: UserModel | string;
  constructor(private router: Router) {}

  ngOnInit(): void {
    const session = sessionStorage.getItem('currentUser');
    if (session) {
      this.currentUser = JSON.parse(session);
      const obj = JSON.parse(session);
      this.user = obj.name;
    }
  }
  signOut() {
    sessionStorage.clear();
    return this.router.navigateByUrl('/login');
  }
}
