import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-landing-page',
  templateUrl: './editar-landing-page.component.html',
  styleUrls: ['./editar-landing-page.component.scss']
})
export class EditarLandingPageComponent implements OnInit {
  count = 2
  add = faPlus
  input = [1]
  constructor() { }

  ngOnInit(): void {
  }
  campoInput(){
    this.count = 1+
    this.input.push(this.count)
    console.log(this.input)
    console.log(this.count)
  }
}
