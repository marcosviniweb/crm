import { EventEmitter, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { IdeaService } from 'src/app/service/idea.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  public viewEvent = new EventEmitter<any>();

  constructor(
    public fireservice: AngularFirestore,
    public service: IdeaService,
    private router: Router
  ) { }

  public onOffHeader(val: boolean){
    this.viewEvent.emit(val);
  }

}
