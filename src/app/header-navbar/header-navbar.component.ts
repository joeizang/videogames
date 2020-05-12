import { Component, OnInit } from '@angular/core';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.css'],
})
export class HeaderNavbarComponent implements OnInit {
  authStatus: boolean;
  constructor(private authSrv: AuthServiceService, private router: Router) {}

  ngOnInit(): void {
    this.authStatus = this.checkUserLoginStatus();
  }

  checkUserLoginStatus(): boolean {
    return this.authSrv.checkUserSignInStatus();
  }

  userSignOut(): void {
    this.authSrv.userSignOut();
    this.router.navigate(['accounts/login']);
  }
}
