import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { IdeaService } from 'src/app/service/idea.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.scss']
})
export class WhatsappComponent implements OnInit {
  userIcon = faUserCircle
  send = faPaperPlane
  whats = faWhatsapp
  msg : string = '';
  number: string | undefined = '';
  backPage = '/cliente';
  cliente: any;
  constructor(
    public service: IdeaService,
    public activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
   let id =  this.activeRoute.snapshot.params['id'];
   console.log(id);
    this.service.getCliente(id).subscribe((res) => {
          this.cliente = res;
          console.log(this.cliente);
          this.number = res[0].telefonecliente
          console.log(this.number)
    })
  }

  enviar(){
    console.log(this.msg)
    window.open(`https://wa.me/55${this.number}?text=${this.msg}`);

  }
}
