import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth, User } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap, first, tap } from 'rxjs/operators';
import { AppUser } from './user';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  user$: Observable<AppUser>;
  loggedInUser: User;

  constructor(
    private fireAuth: AngularFireAuth,
    private store: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.fireAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.store.doc<AppUser>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }
  provider = new auth.GoogleAuthProvider();
  async userSignIn() {
    const user = await this.fireAuth.signInWithPopup(this.provider);
    const referencedUser: AngularFirestoreDocument<AppUser> = this.store.doc(
      `users/${user.user.uid}`
    );
    console.log(this.provider);
    this.userUpdates(user.user as any);
  }

  async userUpdates(user: AppUser) {
    const referencedUser: AngularFirestoreDocument<AppUser> = this.store.doc(
      `users/${user.uid}`
    );
    const userData = {
      uid: user.uid,
      email: user.email,
      photoURL: user.photoURL,
      displayName: user.displayName,
    };

    referencedUser.set(userData, { merge: true });
  }

  private getFirst() {
    return this.fireAuth.authState.pipe(first());
  }

  checkUserSignInStatus(): boolean {
    this.getFirst().pipe(
      tap((firstUser) => {
        if (firstUser) {
          this.loggedInUser = firstUser;
          return true;
        }
      })
    );
    return false;
  }

  async userSignOut(): Promise<void> {
    await this.fireAuth.signOut();
  }
}
