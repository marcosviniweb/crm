import { Component, OnInit } from '@angular/core';
import { faGraduationCap, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  curso = faGraduationCap
  add = faPlus
  constructor() { }

  ngOnInit(): void {
  }

}
