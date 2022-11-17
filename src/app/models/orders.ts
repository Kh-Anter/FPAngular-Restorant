export class order {
    orderId: string;
    address: string;
    checked: boolean;
    date: string;
    isDeliverd: boolean;
    item: [];
    total: string;
    uid: string;
    deliveryName:string;
    clientName:string;
    did: string;

    constructor(orderId: string, address: string, checked: boolean, date: string, isDeliverd: boolean, item: [], total: string, uid: string, did: string,deliveryName:string,clientName:string) {
        this.orderId = orderId;
        this.address = address;
        this.checked = checked;
        this.date = date;
        this.isDeliverd = isDeliverd;
        this.item = item;
        this.total = total;
        this.uid = uid;
        this.did = did;
        this.deliveryName = deliveryName;
        this.clientName = clientName;
    }
}