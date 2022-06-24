import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  public viewEvent = new EventEmitter<any>();

  constructor() { }

  public onOffHeader(val: boolean){
    this.viewEvent.emit(val);
  }

}
