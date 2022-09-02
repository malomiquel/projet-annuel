import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player } from '../model/player';
import { PlayerBack } from '../model/playerBack';
import { PlayerService } from '../services/players.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() player! : PlayerBack;
  @Input() position! : number;
  @Output() demandeSuppression : EventEmitter<void> = new EventEmitter();

  constructor(private http : HttpClient, private service : PlayerService){
  }

  ngOnInit(): void {
  }
  
  gererClic() {
    this.demandeSuppression.emit();
  }
}
