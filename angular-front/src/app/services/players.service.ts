import { Injectable } from '@angular/core';
import { Player } from '../model/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  public tabPlayers : Player[] = [
    {
      label : "Test",
      club : "Mancity",
      pac: 80,
      sho: 79,
      pas: 80,
      dri: 80,
      def: 10,
      phy: 80,
    },
    {
      label : "Test2",
      club : "Mancity",
      pac: 80,
      sho: 79,
      pas: 20,
      dri: 80,
      def: 10,
      phy: 80,
    },
    {
      label : "Test3",
      club : "Mancity",
      pac: 80,
      sho: 90,
      pas: 80,
      dri: 80,
      def: 90,
      phy: 80,
    },
  ];
  
  constructor() { }
}
