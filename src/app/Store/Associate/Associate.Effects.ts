import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AssociateService } from "src/app/service/associate.service";
import { loadassociate, loadassociatefail, loadassociatesuccess } from "./Associate.Action";
import { catchError, exhaustMap, map, of } from "rxjs";

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
}