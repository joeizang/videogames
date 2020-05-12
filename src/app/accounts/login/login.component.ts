import { Component, OnInit } from '@angular/core';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  faGoogle = faGoogle;

  constructor(private authSrv: AuthServiceService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.authSrv);
  }

  async userSignIn() {
    try {
      await this.authSrv.userSignIn();
      this.router.navigate(['video-games/list']);
    } catch (error) {
      console.log(error);
    }
  }
}
