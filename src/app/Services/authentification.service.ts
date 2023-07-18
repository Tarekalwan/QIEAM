import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private isLoggedIn: boolean = false;

  constructor() { }

  login(username: string, password: string): boolean {
    // Vérification des informations de connexion
    if (username === 'Gamer' && password === 'Gamer123') {
      this.isLoggedIn = true;
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
