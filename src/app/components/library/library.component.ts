import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../Services/store.service';
import { LibraryService } from '../../Services/library.service';
import { Game } from '../../models/game.model';



@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  libraryGames: Game[] = [];
  storeGames: Game[] = [];
  paginatedStoreGames: Game[] = [];
  itemsPerPage: number = 5;
  currentPage: number = 0;


  constructor(
    private libraryService: LibraryService,
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.getLibraryGames();
    this.getStoreGames();
  }

  getLibraryGames(): void {
    this.libraryService.getLibraryGames().subscribe(games => {
      this.libraryGames = games;

    });
  }

  getStoreGames(): void {
    this.storeService.getStoreGames().subscribe(games => {
      this.storeGames = games;
      this.paginateStoreGames();
    });
  }

  addToLibrary(game: Game): void {
    // Déplacez le jeu de la liste storeGames vers la liste libraryGames
    const gameIndex = this.storeGames.indexOf(game);
    if (gameIndex !== -1) {
      this.storeGames.splice(gameIndex, 1); // Supprime le jeu de la liste storeGames
      this.libraryGames.push(game); // Ajoute le jeu à la liste libraryGames
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.paginateStoreGames();
    }
  }

  nextPage() {
    if ((this.currentPage + 1) * this.itemsPerPage < this.storeGames.length) {
      this.currentPage++;
      this.paginateStoreGames();
    }
  }

  paginateStoreGames() {
    this.paginatedStoreGames = this.storeGames.slice(this.currentPage * this.itemsPerPage, (this.currentPage + 1) * this.itemsPerPage);
  }
}
