import { Component} from '@angular/core';
import { CenterService } from 'src/app/marathon/services/centers/center.service';
import { ParticipantsService } from 'src/app/marathon/services/participants/participants.service';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css'],
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
  dataSource = new MatTableDataSource();
  centers: any;

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  Sort!: MatSort;

  constructor(
    private participantsService:ParticipantsService,
    private centersService: CenterService) {  }
  ngOnInit(): void {
    this.participantsService.getAll()
      .subscribe((data:any) => {
        this.dataSource.data = data;
      });
    this.centersService.getAll()
      .subscribe((data:any) => {
        this.centers = data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.Sort;
  }

  getCenterName(centerId: number): string {
    const center = this.centers.find((center: any) => center.id === centerId);
    return center ? center.name : '';
  }



}
