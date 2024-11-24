import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addassociate } from 'src/app/Store/Associate/Associate.Action';

@Component({
  selector: 'app-addassociate',
  templateUrl: './addassociate.component.html',
  styleUrls: ['./addassociate.component.scss']
})
export class AddassociateComponent implements OnInit{

  associateform: FormGroup<any>;
  type:string
  
  constructor(private _fb:FormBuilder,
    private matref: MatDialogRef<AddassociateComponent>,
    private _store:Store,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.associateform = this._fb.group({
      id: this._fb.control(''),
      name:this._fb.control('',Validators.required),
      phone:this._fb.control('',Validators.required),
      associategroup:this._fb.control('',Validators.required),
      status:this._fb.control(true)
    })
  }
  
  ngOnInit(): void {
    this.type = this.data;
    
  }


  SaveAssociate(data:any) {
    console.log(data);
    if(this.type = 'Edit Associate') {
      
    } else {
      delete data.id;
      this._store.dispatch(addassociate({inputdata:data}));
    }
    this.closepopup()
  }

  closepopup() {
    this.matref.close();
  }

}
