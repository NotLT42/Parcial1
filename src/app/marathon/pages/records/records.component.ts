import { Component } from '@angular/core';
import { CenterService } from 'src/app/marathon/services/centers/center.service';
import { ParticipantsService } from 'src/app/marathon/services/participants/participants.service';


@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'centerId',
    'ranking',
    'recordTime'
  ];
  dataSource: any;
  centers: any;
  constructor(
    private participantsService:ParticipantsService,
    private centersService: CenterService) {  }
  ngOnInit(): void {
    this.participantsService.getAll()
      .subscribe((data:any) => {
        this.dataSource = data;
      });
    this.centersService.getAll()
      .subscribe((data:any) => {
        this.centers = data;
    });

  }
  getCenterName(centerId: number): string {
    const center = this.centers.find((center: any) => center.id === centerId);
    return center ? center.name : '';
  }


}
