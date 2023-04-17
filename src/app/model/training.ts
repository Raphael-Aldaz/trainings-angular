export class Training {
  id: number;
  name : string;
  description : string;
  price: number;
  quantity: number;

  constructor(id:number, name:string, desciption: string, price: number,quantity: number){
    this.id = id;
    this.name = name;
    this.description = desciption;
    this.price=price;
    this.quantity=quantity;
  }

}
