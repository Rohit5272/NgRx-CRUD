import { createReducer, on } from "@ngrx/store";
import { AssociateState } from "./Associate.State";
import { loadassociatesuccess } from "./Associate.Action";

const _AssociateReducer = createReducer(AssociateState,
    on(loadassociatesuccess,(state,action) => {
        return {
            ...state,
            list:[...action.list],
            errormessage:''
        }
    })
)

export function AssociateReducer(state:any,action:any) {
    return _AssociateReducer(state, action);
}