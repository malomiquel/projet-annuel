import { Injectable } from '@angular/core';
import { Player } from '../model/player';
import { PlayerBack } from '../model/playerBack';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  public tabPlayers : PlayerBack[] = [
    {
      label : "Test",
      club : "Mancity",
      pac: 80,
      sho: 79,
      pas: 80,
      dri: 80,
      def: 10,
      phy: 80,
      score: Math.round((80 + 79 + 80 + 80 + 10 + 80 ) / 6)
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
      score: Math.round((80 + 79 + 20 + 80 + 10 + 80 ) / 6)
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
      score: Math.round((80 + 90 + 80 + 80 + 90 + 80 ) / 6)
    },
  ];
  
  constructor() { }
}
