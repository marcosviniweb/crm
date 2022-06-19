import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  constructor(
    public fireservice: AngularFirestore
  ) { }

   criarFunil(id: any, dados: any){
            return this.fireservice.collection('Funil').doc(id).set(dados)
   }
}
