import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [LoginComponent, SignupComponent],
})
export class AccountsModule {}
