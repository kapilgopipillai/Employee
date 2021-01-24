import { IEmployeeModel } from "../model/IEmployeeModel";


export class EmployeeState {
  list: {
    data: IEmployeeModel[];
    count: number;
    isBusy: boolean;
  };
  entry: {
    data: IEmployeeModel;
    isBusy: boolean;
  }

  constructor() {
    this.list = {
      count: 0,
      data: [],
      isBusy: true
    };
    this.entry = {
      data: {} as IEmployeeModel,
      isBusy: false
    }
  }
}
