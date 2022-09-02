import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/model/player';
import { PlayerBack } from 'src/app/model/playerBack';
import { PlayerService } from 'src/app/services/players.service';

@Component({
  selector: 'app-page-liste',
  templateUrl: './page-liste.component.html',
  styleUrls: ['./page-liste.component.css']
})
export class PageListeComponent implements OnInit {
  constructor(public PlayerService: PlayerService, private http: HttpClient) {
    this.http.get<PlayerBack[]>(`http://localhost:3333/players`)
      .subscribe((data) => {
        console.log(data);
        this.PlayerService.tabPlayers = data;
      });
  }

  supprimerPlayer(player : PlayerBack) {
    let positionPlayer = this.PlayerService.tabPlayers.indexOf(player);
    if (positionPlayer != -1) {
      this.http.delete<number>(`http://localhost:3333/player/${player._id}`)
        .subscribe(() => {
          this.PlayerService.tabPlayers.splice(positionPlayer, 1);
        }
        );
    }
  }


  ngOnInit(): void {
  }

}
