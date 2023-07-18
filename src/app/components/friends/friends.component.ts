import { Component, OnInit } from '@angular/core';
import { FriendService } from '../../Services/friend.service';
import { Friend } from '../../models/friends';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  friends: Friend[] = []; // Liste des amis
  filteredFriends: Friend[] = []; // Liste des amis filtrés
  searchName: string = ''; // Nom de recherche
  currentPage = 0; // commence à la première page
  itemsPerPage = 10;

  constructor(private friendService: FriendService) {}

  ngOnInit(): void {
    this.getFriends();
  }

  getFriends(): void {
    this.friends = this.friendService.getFriends();
    this.filteredFriends = [...this.friends];
  }

  searchFriends(): void {
    this.filteredFriends = this.friends.filter(friend =>
      friend.name.toLowerCase().includes(this.searchName.toLowerCase())
    );
    this.currentPage = 0;
  }

  get paginatedFriends() {
    // commence à l'index correspondant à la page actuelle et prend un nombre d'éléments égal à itemsPerPage
    return this.filteredFriends.slice(this.currentPage * this.itemsPerPage, (this.currentPage + 1) * this.itemsPerPage);
  }

  nextPage() {
    if ((this.currentPage + 1) * this.itemsPerPage < this.filteredFriends.length) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }
}
