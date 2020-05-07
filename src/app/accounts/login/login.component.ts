import { Component, OnInit } from '@angular/core';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AuthServiceService } from 'src/app/services/auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  faGoogle = faGoogle;
  constructor(private authSrv: AuthServiceService) {}

  ngOnInit(): void {
    console.log(this.authSrv);
  }

  async userSignIn() {
    await this.authSrv.userSignIn();
  }

  userSignOut(): void {
    this.authSrv.userSignOut();
  }
}
