import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Player } from 'src/app/model/player';
import { PlayerService } from 'src/app/services/players.service';

@Component({
  selector: 'app-page-ajout',
  templateUrl: './page-ajout.component.html',
  styleUrls: ['./page-ajout.component.css']
})
export class PageAjoutComponent implements OnInit {
  playerName!: string;
  club! : string;
  pac! : number;
  sho! : number;
  pas! : number;
  dri! : number;
  def! : number;
  phy! : number;

  @ViewChild('mySwal')
  public readonly mySwal!: SwalComponent;
  
  constructor(public playerService : PlayerService, private router : Router) {
  }

  ngOnInit(): void {
  }

  addPlayer() {
    let newPlayer : Player = {
      playerName!: this.playerName,
      club! : this.club,
      pac! : this.pac,
      sho! : this.sho,
      pas! : this.pas,
      dri! : this.dri,
      def! : this.def,
      phy! : this.phy,
    };

    this.playerService.tabPlayers.push(newPlayer);
    this.mySwal.fire().then(() => {
      this.router.navigateByUrl("liste");
    });
  }

}
