import { Historico } from './../interfaces/historico';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference  } from "@angular/fire/firestore";
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { Funil } from 'src/app/interfaces/funil';
import { Vendedor } from "../interfaces/vendedor";
import { Tarefa } from "../interfaces/tarefa";
import { Produtos } from "../interfaces/produtos";
import { Landing } from './../interfaces/landing';
import { Responsavel } from "../interfaces/responsavel";
import { Campanhas } from "../interfaces/campanhas";
import { Clientes } from "../interfaces/clientes";
import { Etapa } from "../interfaces/etapa";

export interface Idea {
   nome:'',

}
@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  public funil = this.afs.collection<Funil>('Funil');
  public usuarios = this.afs.collection<Vendedor>('Usuarios');
  public tarefa = this.afs.collection<Tarefa>('Tarefa');
  public produto = this.afs.collection<Produtos>('Produto');
  public landing = this.afs.collection<Landing>('Landing');
  public responsavel = this.afs.collection<Responsavel>('Responsavel');
  public campanhas = this.afs.collection<Campanhas>('Campanha');
  public clientes = this.afs.collection<Clientes>('Clientes');
  public etapa = this.afs.collection<Etapa>('Etapa');
  public historico = this.afs.collection<Historico>('Historico');

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
      return this.afs.collection('Usuarios').doc(id).set(dados)
    }

    getVendedor(){
      return this.usuarios.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
     }

     getvendedorId(id: string): Observable<Vendedor[]>{
      var ordenacao =  this.afs.collection<Vendedor>("Usuarios", ref => ref.where('id', '==', id)).valueChanges()
      return ordenacao
     }

  editarVendedor(id: any, dados: any){
      return this.afs.collection('Usuarios').doc(id).update(dados)
   }

   addTarefa(id: any, dados: any){
    return this.afs.collection('Tarefa').doc(id).set(dados)
 }
    getTarefa(){
      return this.tarefa.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );

    }

    addProduto(id: any, dados: any){
      return this.afs.collection('Produto').doc(id).set(dados)
   }

   getProdutos(){
    return this.produto.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

  }

  editarProdutos(id: any, dados: any){
    return this.afs.collection('Produto').doc(id).update(dados)
 }

 addLanding(id: any, dados: any){
  return this.afs.collection('Landing').doc(id).set(dados)
}


  getCampanha(){
    return this.landing.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    }

  getLandingId(id: string): Observable<Landing[]>{
    var ordenacao =  this.afs.collection<Landing>("Landing", ref => ref.where('id', '==', id)).valueChanges()
      return ordenacao
    }

   editarlanding(id: any, dados: any){
    return this.afs.collection('Landing').doc(id).update(dados)
    }
    exluirLanding(id: string){
          return this.afs.collection('Landing').doc(id).delete()
    }

    getCampanhaId(id: string): Observable<Campanhas[]>{
      var ordenacao =  this.afs.collection<Campanhas>("Landing", ref => ref.where('link', '==', id)).valueChanges()
      return ordenacao
    }

     addCliente(id: any, dados: any){
      return this.afs.collection('Clientes').doc(id).set(dados)
    }

    exluirFunil(id: string){
      return this.afs.collection('Funil').doc(id).delete()
    }

    addEtapa(id: any, dados: any){
      return this.afs.collection('Etapa').doc(id).set(dados)
    }

    getFunilEtapa(idfunil: any): Observable<Funil[]>{
      var ordenacao =  this.afs.collection<Funil>("Funil", ref => ref.where('id', '==', idfunil)).valueChanges()
      return ordenacao
    }

    getFunilEtapaInteressado(idfunil: any, etapa: any): Observable<Etapa[]>{
      var ordenacao =  this.afs.collection<Etapa>("Etapa", ref => ref.where('idfunil', '==', idfunil).where('etapa', '==', etapa)).valueChanges()
      return ordenacao
    }

    getEtapa(){
      return this.etapa.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );

      }


    getprodutovalor(produto: any): Observable<Produtos[]>{
      var ordenacao =  this.afs.collection<Produtos>("Produto", ref => ref.where('categoria', '==', produto)).valueChanges()
      return ordenacao
    }

    addRelatorioValores(id: any, dados: any){
      return this.afs.collection('Relatorio Etapas').doc(id).set(dados)
    }

    getCliente(id: any): Observable<Clientes[]>{
      var ordenacao =  this.afs.collection<Clientes>("Clientes", ref => ref.where('id', '==', id)).valueChanges()
      return ordenacao
    }

    getClienteEtapa(id: any): Observable<Etapa[]>{
      var ordenacao =  this.afs.collection<Etapa>("Etapa", ref => ref.where('idcliente', '==', id)).valueChanges()
      return ordenacao
    }

    editarEtapa(id: any, dados: any){
      return this.afs.collection('Etapa').doc(id).update(dados)
  }

  getClienteFunil(id: any): Observable<Etapa[]>{
    var ordenacao =  this.afs.collection<Etapa>("Etapa", ref => ref.where('idfunil', '==', id)).valueChanges()
    return ordenacao
  }

  getUserId(id: any): Observable<Vendedor[]>{
    var ordenacao =  this.afs.collection<Vendedor>("Usuarios", ref => ref.where('id', '==', id)).valueChanges()
    return ordenacao
  }

  getProdutoId(id: string): Observable<Produtos[]>{
    var ordenacao =  this.afs.collection<Produtos>("Produto", ref => ref.where('id', '==', id)).valueChanges()
    return ordenacao
   }

   exluirProduto(id: string){
    return this.afs.collection('Produto').doc(id).delete()
  }

  getClienteIdFunil(id: any): Observable<Clientes[]>{
    var ordenacao =  this.afs.collection<Clientes>("Clientes", ref => ref.where('idfunil', '==', id)).valueChanges()
    return ordenacao
  }
  addHistorico(id: any, dados: any){
    return this.afs.collection('Historico').doc(id).set(dados)
 }
  getClienteEtapaHistorico(id: any): Observable<Etapa[]>{
  var ordenacao =  this.afs.collection<Etapa>("Etapa", ref => ref.where('nomecliente', '==', id)).valueChanges()
  return ordenacao
  }
  getClienteHistorico(id: any): Observable<Historico[]>{
  var ordenacao =  this.afs.collection<Historico>("Historico", ref => ref.where('cliente', '==', id)).valueChanges()
  return ordenacao
  }

  getHistorico(){
    return this.historico.snapshotChanges().pipe(
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
