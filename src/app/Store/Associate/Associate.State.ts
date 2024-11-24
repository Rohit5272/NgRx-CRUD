import { AssociateModel } from "../Model/Associate.model";

export const AssociateState :AssociateModel = {
    list: [],
    errormessage: "",
    associateobj: {
        id: "",
        name: "",
        phone: "",
        associategroup:"level1",
        status: false
    },
}