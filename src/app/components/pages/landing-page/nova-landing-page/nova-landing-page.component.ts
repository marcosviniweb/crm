import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-landing-page',
  templateUrl: './nova-landing-page.component.html',
  styleUrls: ['./nova-landing-page.component.scss']
})
export class NovaLandingPageComponent implements OnInit {
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
