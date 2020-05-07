import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { VideogamesModule } from './videogames/videogames.module';
import { AccountsModule } from './accounts/accounts.module';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [AppComponent, HeaderNavbarComponent, FooterComponent],
  imports: [
    AccountsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBSg3S1zROND4p1O3W-OvkGvoD3LdEXToY',
      authDomain: 'vgames-db06e.firebaseapp.com',
      databaseURL: 'https://vgames-db06e.firebaseio.com',
      projectId: 'vgames-db06e',
      storageBucket: 'vgames-db06e.appspot.com',
      messagingSenderId: '924513638909',
      appId: '1:924513638909:web:959b68c0b80e356c4da194',
      measurementId: 'G-VJSZLJ9V76',
    }),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    VideogamesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faGoogle);
  }
}
