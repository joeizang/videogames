import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireStorageReference } from '@angular/fire/storage/ref';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  gameList;
  ref: AngularFireStorageReference;
  constructor(private store: AngularFireStorage) {
    this.ref = this.store.ref('images');
  }

  ngOnInit(): void {
    let variable;
    this.gameList = this.ref.listAll().pipe(
      finalize(() => {
        variable = this.ref.getMetadata().subscribe((x) => {
          console.log(x);
        });
      })
    );
  }
}
