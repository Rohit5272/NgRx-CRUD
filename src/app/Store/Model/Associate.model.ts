export interface Associates {
    id:string,
    name:string,
    phone:string,
    status:boolean
}

export interface AssociateModel {
    list: Associates[],
    associateobj:Associates,
    errormessage:string
}