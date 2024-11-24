import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddassociateComponent } from '../addassociate/addassociate.component';
import { Store } from '@ngrx/store';
import { loadassociate } from 'src/app/Store/Associate/Associate.Action';
import { getassociate, getassociatelist } from 'src/app/Store/Associate/Associate.Selector';
import { AssociateModel, Associates } from 'src/app/Store/Model/Associate.model';

@Component({
  selector: 'app-associatelisting',
  templateUrl: './associatelisting.component.html',
  styleUrls: ['./associatelisting.component.scss']
})
export class AssociatelistingComponent {

  Associatelist!:Associates[];
  dataSource:any;
  displayedColumns: string[] = ['id', 'name', 'phone', 'status','action'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _dialog:MatDialog,private _store:Store) {}

  ngOnInit() {

    this._store.dispatch(loadassociate());
    this._store.select(getassociatelist).subscribe(res => {
      this.Associatelist = res;
      this.dataSource = new MatTableDataSource<Associates>(this.Associatelist); 
      this.dataSource.paginator = this.paginator;

    })
    
  }

  openPopup() {
    this._dialog.open(AddassociateComponent, {
      width: '50%'
    })
  }
}

export interface PeriodicElement {
  id: number;
  name: string;
  phone: number;
  status: string;
  action:boolean
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', phone: 1.0079, status: 'H',action:true}
];
