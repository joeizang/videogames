import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Videogame } from 'src/app/services/videogame';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

interface Url {
  id: string;
  url: string;
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  gameList: Observable<Videogame[]>;
  gamesCollection: AngularFirestoreCollection<Videogame>;
  gamesList: Videogame[];
  urls: Url[];
  constructor(private db: AngularFirestore, router: Router) {
    this.gamesCollection = this.db.collection<Videogame>('videogames');
    this.gameList = this.gamesCollection.valueChanges();
  }

  ngOnInit(): void {}

  listGames() {}
}
