import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { AngularFirestoreCollection } from '@angular/fire/firestore/collection/collection';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  createGroup: FormGroup;
  file: any;
  imageUrl: Observable<any>;
  collection: AngularFirestoreCollection<unknown>;

  constructor(
    private createBuilder: FormBuilder,
    private db: AngularFirestore,
    private storage: AngularFireStorage,
    private router: Router
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
    console.log(file);
  }

  async createVideoGame() {
    try {
      await this.uploadFile(this.file);
      const data = this.createGroup.value;
      console.log(`Echo data!${data}`);
      data.imagePath = this.imageUrl.subscribe();
      console.log(
        `${this.imageUrl} url from fireStorage should here unless its not!!:-(`
      );
      this.persistVideoGame(data);
      this.createGroup.reset();
    } catch (error) {
      console.log(
        `You have errors in the createVideoGame Method here it is: ${error}`
      );
    }
  }

  async persistVideoGame(data) {
    this.collection = this.db.collection('videogames');
    const result = await this.collection.add(data);
    this.router.navigate(['']);
  }

  async uploadFile(uploadFile) {
    let file = null;
    if (uploadFile != null) {
      file = uploadFile;
    }
    const fpath = `images/${new Date().getTime()}-${file.name}`;
    const fRref = this.storage.ref(fpath); // reference to storage bucket
    const uploadTask = this.storage.upload(fpath, file).snapshotChanges();

    uploadTask.pipe(
      finalize(() => {
        console.log(`Just entered the finalize method in pipe!`);
        this.imageUrl = fRref.getDownloadURL();
      })
    );
  }
}
