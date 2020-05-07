import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  createGroup: FormGroup;

  constructor(private createBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createGroup = this.createBuilder.group({
      title: new FormControl('', Validators.required),
      imagePath: new FormControl('', Validators.required),
      description: new FormControl(''),
    });
  }

  async createVideoGame() {
    alert('creating...');
  }
}
