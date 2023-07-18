import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  private libraryGames: Game[] = [

      { "id": 1, "name": "Astral Quest", "description": "Exploration spatiale"},
      { "id": 2, "name": "Pixel Runner", "description": "Course infinie"},
      { "id": 3, "name": "Castle Defenders", "description": "Défense stratégique"},
      { "id": 4, "name": "Ocean's Secret", "description": "Aventure sous-marine"},
      { "id": 5, "name": "Mystery Mansion", "description": "Enquête mystérieuse"},
      { "id": 6, "name": "Robot Uprising", "description": "Combat futuriste"}
    ];

  constructor() { }

  getLibraryGames(): Observable<Game[]> {
    return of(this.libraryGames);
  }
}
