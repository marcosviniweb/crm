import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference  } from "@angular/fire/compat/firestore";
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { Funil } from 'src/app/interfaces/funil';
import { Vendedor } from "../interfaces/vendedor";
export interface Idea {
   nome:'',

}
@Injectable({
  providedIn: 'root'
})
export class IdeaService {
  //private ideas: Observable<Idea[]>;
  //private ideaCollection: AngularFirestoreCollection<Idea>;
  public funil = this.afs.collection<Funil>('Funil');
  public vendedor = this.afs.collection<Vendedor>('Vendedor');

  constructor(
    public afs: AngularFirestore
  ) {}

   criarFunil(id: any, dados: any){
      return this.afs.collection('Funil').doc(id).set(dados)
   }
   getFunil(){
    return this.funil.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
   }

   getFunilId(id: string): Observable<Funil[]>{
    var ordenacao =  this.afs.collection<Funil>("Funil", ref => ref.where('id', '==', id)).valueChanges()
    return ordenacao
   }
      editarFunil(id: any, dados: any){
        return this.afs.collection('Funil').doc(id).update(dados)
    }

    cadastrarVendedor(id: any, dados: any){
      return this.afs.collection('Vendedor').doc(id).set(dados)
    }

    getVendedor(){
      return this.vendedor.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
     }


}
