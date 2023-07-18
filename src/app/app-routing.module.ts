import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

import { AuthentificationComponent } from './components/authentification/authentification.component';
import { LibraryComponent } from './components/library/library.component';
import { FriendsComponent } from './components/friends/friends.component';



const routes: Routes = [
  {path: 'authentification', component: AuthentificationComponent},
  {
    path: 'library',
    component: LibraryComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'friends',
    component: FriendsComponent,
    canActivate : [AuthGuard]

  },
  {path: '', redirectTo: '/authentification', pathMatch:'full'},
  {path: '**', redirectTo: '/authentification', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
