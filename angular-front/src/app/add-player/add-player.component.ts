import { Component, OnInit } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player: Player = {
    name: 'Messi',
    passes: 50
  };

  constructor() { }

  ngOnInit(): void {
  }

}
