import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [CommonModule, FontAwesomeModule, MatIconModule],
  exports: [LoginComponent, SignupComponent],
})
export class AccountsModule {}
