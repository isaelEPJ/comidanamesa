import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from 'src/app/features/auth-pages/model/users.model';

@Component({
  selector: 'app-latera-bar',
  templateUrl: './latera-bar.component.html',
  styleUrls: ['./latera-bar.component.css'],
})
export class LateraBarComponent implements OnInit {
  @Input() user?: UserModel;
  constructor() {}
  ngOnInit(): void {}
}
