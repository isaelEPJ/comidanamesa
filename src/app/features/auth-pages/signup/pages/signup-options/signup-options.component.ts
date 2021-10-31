import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-options',
  templateUrl: './signup-options.component.html',
  styleUrls: ['./signup-options.component.css'],
})
export class SignupOptionsComponent implements OnInit {
  constructor(private route: Router) {}


  ngOnInit(): void {}
}
