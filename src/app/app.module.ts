import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { LibraryComponent } from './components/library/library.component';
import { FriendsComponent } from './components/friends/friends.component';
import { AuthGuard } from './guard/auth.guard';
import { AuthentificationService } from './Services/authentification.service';




@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    LibraryComponent,
    FriendsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ AuthGuard, AuthentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
