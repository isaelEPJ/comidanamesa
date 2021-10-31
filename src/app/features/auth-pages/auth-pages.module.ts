import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { SignupPageComponent } from './signup/pages/signup-page/signup-page.component';
import { SignupOptionsComponent } from './signup/pages/signup-options/signup-options.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SigninComponent, SignupPageComponent, SignupOptionsComponent],
  imports: [CommonModule, RouterModule, SharedModule,ReactiveFormsModule],
})
export class AuthPagesModule {}
