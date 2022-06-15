import { Component, OnInit } from '@angular/core';

import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faEye, faUserCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.scss']
})
export class VendedorComponent implements OnInit {

  userIcon = faUserCircle
  delete = faTrashAlt
  edit = faEdit
  view = faEye

  constructor() { }

  ngOnInit(): void {
  }

}
