import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AssociateService } from "src/app/service/associate.service";
import { addassociate, addassociatesuccess, loadassociate, loadassociatefail, loadassociatesuccess } from "./Associate.Action";
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";
import { showalert } from "../Common/App.Action";

@Injectable()
export class AssociateEffects {

    constructor(private _actions$:Actions,private _service:AssociateService) {}

    _loadassociate = createEffect(() => 
        this._actions$.pipe(
            ofType(loadassociate),
            exhaustMap((action) => {
                return this._service.getAll().pipe(
                    map((data) => {
                        return loadassociatesuccess({list:data})
                    }),
                    catchError((_err) => of(loadassociatefail({errormessage:_err})))
                )
            })
        )
    )

    _addassociate = createEffect(() => 
        this._actions$.pipe(
            ofType(addassociate),
            switchMap((action) => {
                return this._service.create(action.inputdata).pipe(
                    switchMap((data) => {
                        return of(addassociatesuccess({inputdata:action.inputdata}),
                        showalert({message:'Created successfully',resulttype:'pass'}))
                    }),
                    catchError((err) => of(showalert({message:'failed to create associate',resulttype:'fail'})))
                )
            })
        )
    )
}