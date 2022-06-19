import { Component, OnInit } from '@angular/core';

import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faEye, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  userIcon = faUserCircle
  delete = faTrashAlt
  edit = faEdit
  view = faEye
  ngOnInit(): void {
  }

}