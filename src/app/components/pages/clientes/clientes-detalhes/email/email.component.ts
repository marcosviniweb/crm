import { Component, OnInit } from '@angular/core';

import { faEnvelope, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  email = faEnvelope
  add = faPlus
  constructor() { }

  ngOnInit(): void {
  }

}
