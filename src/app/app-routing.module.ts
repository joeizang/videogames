import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './videogames/list/list.component';
import { CreateComponent } from './videogames/create/create.component';
import { EditComponent } from './videogames/edit/edit.component';
import { DeleteComponent } from './videogames/delete/delete.component';
import { LoginComponent } from './accounts/login/login.component';
import { AuthGuardGuard } from './services/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'accounts/login',
    pathMatch: 'full',
  },
  {
    path: 'video-games/create',
    component: CreateComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'video-games/list',
    component: ListComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'video-games/edit/:id',
    component: EditComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'video-games/delete/:id',
    component: DeleteComponent,
    canActivate: [AuthGuardGuard],
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
