import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { faEnvelope, faPlus, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { IdeaService } from 'src/app/service/idea.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  userIcon = faUserCircle

  email = faEnvelope
  add = faPlus
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
     })
   }

}
