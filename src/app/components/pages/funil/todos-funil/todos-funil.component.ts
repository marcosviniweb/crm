import { Component, OnInit } from '@angular/core';

import { faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todos-funil',
  templateUrl: './todos-funil.component.html',
  styleUrls: ['./todos-funil.component.scss']
})
export class TodosFunilComponent implements OnInit {

  funnel = faFilter
  delete = faTrashAlt
  edit = faEdit

  constructor() { }

  ngOnInit(): void {
  }

  backPage(e:string){
    if(e== 'back'){
      sessionStorage.setItem('back', '/funil/all')
    }
  }

}
