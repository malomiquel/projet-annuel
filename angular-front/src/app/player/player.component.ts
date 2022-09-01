import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player } from '../model/player';
import { PlayerBack } from '../model/playerBack';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() player! : PlayerBack;
  @Output() demandeSuppression : EventEmitter<void> = new EventEmitter();

  constructor() {
    
  }

  ngOnInit(): void {
  }
  
  gererClic() {
    this.demandeSuppression.emit();
  }
}
