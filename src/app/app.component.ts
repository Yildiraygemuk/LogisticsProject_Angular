import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';

export interface ExampleTable {
  orderNo: string;
  fromAddress: string;
  goingAddress: string;
  count: number;
  unitQuantitiesValue: string;
  weight: number;
  unitWeighValue: string;
  productCode: string;
  note: string;
  statusValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['orderNo', 'fromAddress', 'goingAddress','count','unitQuantitiesValue','weight','unitWeighValue', 'productCode','note','statusValue'];
  dataSource: ExampleTable[] = [];

  constructor(public dialog: MatDialog, private http: HttpClient) {}

  ngOnInit(): void {
    axios.get<ExampleTable[]>('https://localhost:44314/api/Order/GetList')
  .then(response => {
    console.log("res",response)
    this.dataSource = response.data;
  })
  .catch(error => {
    console.log(error);
  });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
