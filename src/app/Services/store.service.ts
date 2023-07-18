import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private storeGames: Game[] = [

      { "id": 7, "name": "Dragon's Legacy", "description": "Quête épique"},
      { "id": 8, "name": "Quantum Race", "description": "Vitesse lumière"},
      { "id": 9, "name": "Crypto Heist", "description": "Vol numérique"},
      { "id": 10, "name": "Alien Unbound", "description": "Invasion extraterrestre"},
      { "id": 11, "name": "Ninja Reckoning", "description": "Action furtive"},
      { "id": 12, "name": "Zombie Outbreak", "description": "Survie post-apocalyptique"},
      { "id": 13, "name": "Pharaoh's Curse", "description": "Aventure archéologique"},
      { "id": 14, "name": "Galactic Odyssey", "description": "Voyage stellaire"},
      { "id": 15, "name": "Monster Mayhem", "description": "Chaos monstrueux"}
  ];

  constructor() { }

  getStoreGames(): Observable<Game[]> {
    return of(this.storeGames);
  }
}
