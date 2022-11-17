export class user {
    uId:string;
    firstName:string;
    lastName:string;
    mobileNumber:string;
    email:string;
    cart:[];
    fav:[];
    addresses:[];
    role:number;

    constructor(uId:string,firstName:string,lastName:string,mobileNumber:string,email:string,cart:[],fav:[],addresses:[],role:number)
    {
        this.uId = uId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobileNumber = mobileNumber;
        this.email = email;
        this.cart = cart;
        this.fav = fav;
        this.addresses = addresses;
        this.role = role;
    }
}

export enum Role {
    idel,
    admin,
    delivery
}