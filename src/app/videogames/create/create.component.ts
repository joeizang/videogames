import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  createGroup: FormGroup;
  file: any;

  constructor(
    private createBuilder: FormBuilder,
    private fileSrv: FileUploadService
  ) {}

  ngOnInit(): void {
    this.createGroup = this.createBuilder.group({
      title: new FormControl('', Validators.required),
      imagePath: new FormControl(''),
      description: new FormControl(''),
    });
  }

  async prepFile(event) {
    const [file] = event.target.files;
    this.file = file;
    await this.fileSrv.uploadFile(this.file);
    console.log(file);
  }

  async createVideoGame() {
    const data = this.createGroup.value;
    this.fileSrv.persistVideoGame(data);
  }
}
