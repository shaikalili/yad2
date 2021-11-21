import { Property } from "./app/property.model";

export class Asset{
    public adress:string;
    public city:string;
    public neighberhood:string;
    public type:string;
    public subType:string;
    public rooms:number;
    public price:string;
    public property:Property;
    public floor:string;
    public size:number;
    public date:string;
    public desc:string;
    public image:string;
    public images:string[];
    public name:string;
    public phone:string;

    constructor(adress,type,subType,rooms,price,property,floor,size,date,desc,image,city,neighberhood
        ,images,name,phone){
       this.adress=adress;
       this.type=type;
       this.subType=subType;
       this.rooms=rooms;
       this.price=price;
       this.property=property;
       this.floor=floor;
       this.size=size;
       this.date=date;
       this.desc=desc;
       this.image=image;
       this.city=city;
       this.neighberhood=neighberhood;
       this.images=images;
       this.name=name;
       this.phone=phone;
    }
}