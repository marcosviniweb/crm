import { Component, OnInit } from '@angular/core';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-funil',
  templateUrl: './edit-funil.component.html',
  styleUrls: ['./edit-funil.component.scss']
})
export class EditFunilComponent implements OnInit {


  add = faPlus
  constructor() { }

  ngOnInit(): void {
  }


}
