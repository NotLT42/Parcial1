import { Component } from '@angular/core';
import { ParticipantsService} from "../../../marathon/services/participants/participants.service";
import { CenterService} from "../../../marathon/services/centers/center.service";
import { ParticipantModel} from "../../../shared/models/participant.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  marathonWinner: any;
  participants: ParticipantModel[] = [];
  centers:any;
  rankingToFind = 1;

  constructor(
    private participantsService:ParticipantsService,
    private centersService: CenterService) {  }
  ngOnInit(): void {
    this.participantsService.getAll()
      .subscribe((data:any) => {
        this.participants = data;
        // Getting the marathon winner data
        this.getMarathonWinner();
      });
    this.centersService.getAll()
      .subscribe((data:any) => {
        this.centers = data;
    });
  }

  getMarathonWinner() {
    if (this.participants){
      this.marathonWinner = this.participants.find((participant: any) => participant.ranking === this.rankingToFind);
    }
  }

  getCenterName(centerId: number): string {
    const center = this.centers.find((center: any) => center.id === centerId);
    return center ? center.name : '';
  }

}
