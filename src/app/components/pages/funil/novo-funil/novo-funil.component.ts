import { Component, OnInit } from '@angular/core';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-novo-funil',
  templateUrl: './novo-funil.component.html',
  styleUrls: ['./novo-funil.component.scss']
})
export class NovoFunilComponent implements OnInit {

  add = faPlus
  constructor() { }

  ngOnInit(): void {
  }

}
