/**
 * Created by uuuu on 4/21/2018.
 */
export class Patient {
  id: number;
  name: string;
  sex: string;
  date: Date;
  country: string;
  state: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(id: number, name: string, sex: string, date: Date, country: string, state: string, address: string, createdAt: Date, updatedAt: Date) {
    this.id = id;
    this.name = name;
    this.sex = sex;
    this.date = date;
    this.country = country;
    this.state = state;
    this.address = address;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
