import { Component, OnInit } from '@angular/core';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  faGoogle = faGoogle;
  constructor() {}

  ngOnInit(): void {}
}
