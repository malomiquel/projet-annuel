import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player } from '../model/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() player! : Player;
  @Output() demandeSuppression : EventEmitter<void> = new EventEmitter();

  constructor() {
    
  }
  
  ngOnInit(): void {
  }

  average(player : Player) {
    return Math.round((player.pac + player.sho + player.pas + player.dri + player.def + player.phy) / 6);
  }
}
