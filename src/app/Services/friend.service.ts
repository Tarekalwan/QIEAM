import { Injectable } from '@angular/core';
import { Friend } from '../models/friends';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  private friends: Friend[] = [
    { id: 1, name: 'Mathieu', isFriend : true },
    { id: 2, name: 'Leo', isFriend : true  },
    { id: 3, name: 'Sam' , isFriend : false },
    { id: 4, name: 'Mirna' , isFriend : true },
    { id: 5, name: 'jean' , isFriend : false },
    { id: 6, name: 'Christian' , isFriend : true },
    { id: 7, name: 'Messi', isFriend : false },
    { id: 8, name: 'rapahael', isFriend : true  },
    { id: 9, name: 'Chris' , isFriend : false },
    { id: 10, name: 'Lea' , isFriend : true },
    { id: 11, name: 'Daniel' , isFriend : false },
    { id: 12, name: 'Celine' , isFriend : false },
  ];

  getFriends(): Friend[] {
    return this.friends;
  }
}
