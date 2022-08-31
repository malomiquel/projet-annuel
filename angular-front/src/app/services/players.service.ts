import { Injectable } from '@angular/core';
import { Player } from '../model/player';
import { PlayerBack } from '../model/playerBack';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  public tabPlayers : PlayerBack[] = [];
  
  constructor() { }
}
