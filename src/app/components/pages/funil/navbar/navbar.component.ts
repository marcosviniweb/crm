import { Component, OnInit } from '@angular/core';


import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  back = faArrowLeft
  allFunnels = faEye
  addFunnel = faCrosshairs

  constructor() { }

  ngOnInit(): void {
  }

}
