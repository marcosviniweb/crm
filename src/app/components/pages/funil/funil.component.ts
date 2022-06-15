import { Component, OnInit } from '@angular/core';

import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-funil',
  templateUrl: './funil.component.html',
  styleUrls: ['./funil.component.scss']
})
export class FunilComponent implements OnInit {

  userIcon = faUserCircle
  constructor() { }

  ngOnInit(): void {
  }

}
