import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { v4 as uuid } from 'uuid';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  collection: AngularFirestoreCollection<unknown>;
  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage,
    private router: Router
  ) {}

  async uploadFile(uploadFile) {
    let file = null;
    if (uploadFile != null) {
      file = uploadFile;
    }
    const fpath = `images/${new Date().getTime()}-${file.name}-${uuid()}`;
    const fRref = this.storage.ref(fpath); // reference to storage bucket
    const mainTask = this.storage.upload(fpath, file);
  }

  public async persistVideoGame(data) {
    this.collection = this.db.collection('videogames');
    const result = await this.collection.add(data);
    console.log(result);
    this.router.navigate(['/']);
  }
}
