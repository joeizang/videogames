import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Videogame } from 'src/app/services/videogame';
import { AngularFirestoreCollection } from '@angular/fire/firestore/public_api';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  editGroup: FormGroup;
  db: AngularFirestoreCollection;
  oneId: string;
  constructor(
    private activeRoute: ActivatedRoute,
    private route: Router,
    private editBuilder: FormBuilder,
    private store: AngularFirestore
  ) {
    this.db = this.store.collection<Videogame>('videogames');
    this.oneId = this.activeRoute.snapshot.paramMap.get('gameId');
  }

  ngOnInit(): void {
    this.editGroup = this.editBuilder.group({
      title: [''],
      description: [''],
      imagePath: [''],
    });
  }

  updateGame() {
    try {
      this.db.doc(this.oneId).set(this.editGroup.value, { merge: true });
      this.editGroup.reset();
      this.route.navigate(['video-games/list']);
    } catch (error) {
      console.log(error);
    }
  }
}
