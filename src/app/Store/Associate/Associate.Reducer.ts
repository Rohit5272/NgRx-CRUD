import { createReducer, on } from "@ngrx/store";
import { AssociateState } from "./Associate.State";
import { addassociatesuccess, loadassociatesuccess } from "./Associate.Action";

const _AssociateReducer = createReducer(AssociateState,
    on(loadassociatesuccess,(state,action) => {
        return {
            ...state,
            list:[...action.list],
            errormessage:''
        }
    }),
    on(addassociatesuccess,(state,action) => {
        console.log("state>>",state);
        console.log("action>>",action);
        const newData = {...action.inputdata}
        return {
            ...state,
            list:[...state.list,newData],
            errormessage:''
        }
    })
)

export function AssociateReducer(state:any,action:any) {
    return _AssociateReducer(state, action);
}