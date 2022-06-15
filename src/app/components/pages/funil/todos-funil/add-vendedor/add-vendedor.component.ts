import { Component, OnInit } from '@angular/core';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-vendedor',
  templateUrl: './add-vendedor.component.html',
  styleUrls: ['./add-vendedor.component.scss']
})
export class AddVendedorComponent implements OnInit {

  add = faPlus
  constructor() { }

  ngOnInit(): void {
  }


}
