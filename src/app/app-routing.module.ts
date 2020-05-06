import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './videogames/list/list.component';
import { CreateComponent } from './videogames/create/create.component';
import { EditComponent } from './videogames/edit/edit.component';
import { DeleteComponent } from './videogames/delete/delete.component';
import { SignupComponent } from './accounts/signup/signup.component';
import { LoginComponent } from './accounts/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/video-games/list',
    pathMatch: 'full',
  },
  {
    path: 'video-games/create',
    component: CreateComponent,
  },
  {
    path: 'video-games/edit/:id',
    component: EditComponent,
  },
  {
    path: 'video-games/delete/:id',
    component: DeleteComponent,
  },
  {
    path: 'accounts/signup',
    component: SignupComponent,
  },
  {
    path: 'accounts/login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
