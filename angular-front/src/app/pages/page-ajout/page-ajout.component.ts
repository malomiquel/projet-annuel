import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Player } from 'src/app/model/player';
import { PlayerBack } from 'src/app/model/playerBack';
import { PlayerService } from 'src/app/services/players.service';

@Component({
  selector: 'app-page-ajout',
  templateUrl: './page-ajout.component.html',
  styleUrls: ['./page-ajout.component.css']
})
export class PageAjoutComponent implements OnInit {
  label!: string;
  club! : string;
  pac! : number;
  sho! : number;
  pas! : number;
  dri! : number;
  def! : number;
  phy! : number;

  @ViewChild('mySwal')
  public readonly mySwal!: SwalComponent;
  
  constructor(public playerService : PlayerService, private router : Router, private http : HttpClient) {
  }

  ngOnInit(): void {
  }

  addPlayer() {
    let newPlayer : Player = {
      label!: this.label,
      club! : this.club,
      pac! : this.pac,
      sho! : this.sho,
      pas! : this.pas,
      dri! : this.dri,
      def! : this.def,
      phy! : this.phy,
    };

    // Envoi du joueur vers l'API pour enregistrement dans la BDD et calcul du score du joueur
    this.http.post<PlayerBack>(`http://localhost:3333/player`, newPlayer)
    .subscribe((data) => {
      console.log(data); 
      let newPlayerBack : PlayerBack = {
        label! : data.label,
        club! : data.club,
        pac! : data.pac,
        sho! : data.sho,
        pas! : data.pas,
        dri! : data.dri,
        def! : data.def,
        phy! : data.phy,
        score! : data.score,
      };
      this.playerService.tabPlayers.push(newPlayerBack);
    })

    this.mySwal.fire().then(() => {
      this.router.navigateByUrl("liste");
    });
  }
}
