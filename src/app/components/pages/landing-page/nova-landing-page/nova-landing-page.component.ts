import { Component, OnInit } from '@angular/core';

import { Landing } from './../../../../interfaces/landing';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { IdeaService } from 'src/app/service/idea.service';

@Component({
  selector: 'app-nova-landing-page',
  templateUrl: './nova-landing-page.component.html',
  styleUrls: ['./nova-landing-page.component.scss']
})
export class NovaLandingPageComponent implements OnInit {

  public landing:Landing = {}
  funis:any = []
  count = 2
  add = faPlus
  input = [1]
  constructor( public service: IdeaService ) { }

  ngOnInit(){
    this.service.getFunil().subscribe((res)=> {
      this.funis = res
      console.log(this.funis)
    })
  }

  campoInput(){
    this.count = 1+
    this.input.push(this.count)
    console.log(this.input)
    console.log(this.count)
  }

  addLanding(){
    console.log(this.landing);

  }

  getCampo(){
    let input = document.querySelector('#input')
    console.log(input!.nodeValue)
  }
}
