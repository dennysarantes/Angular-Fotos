export class Alert {

  constructor(private _alertType : AlertType,
              private _message : string){}

  get message(){
    return this._message;
  }

  get alertType(){
    return this._alertType;
  }

}

export enum AlertType {

  SUCCESS,
  WARNING,
  DANGER,
  INFO

}
