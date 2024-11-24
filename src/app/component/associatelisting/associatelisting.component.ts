import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddassociateComponent } from '../addassociate/addassociate.component';
import { Store } from '@ngrx/store';
import { loadassociate } from 'src/app/Store/Associate/Associate.Action';
import { getassociatelist } from 'src/app/Store/Associate/Associate.Selector';
import { Associates } from 'src/app/Store/Model/Associate.model';

@Component({
  selector: 'app-associatelisting',
  templateUrl: './associatelisting.component.html',
  styleUrls: ['./associatelisting.component.scss']
})
export class AssociatelistingComponent {

  Associatelist!:Associates[];
  dataSource:any;
  displayedColumns: string[] = ['id', 'name', 'phone','associategroup','status','action'];

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

  edit(id:string) {
    console.log(id);
    this.openPopup(id,'Edit Associate')
  }

  openPopup(id:string,type:string='Add Associate') {
    this._dialog.open(AddassociateComponent, {
      width: '50%',
      data: {
        id:id,
        type:type
      }
    })
  }

}