import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { faArrowLeft, faEye, faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  routes:string | undefined
  routerBack = ''

  back = faArrowLeft
  allFunnels = faEye
  addFunnel = faCrosshairs
  constructor(public route:ActivatedRoute, public headerService:HeaderService) {
   this.routes = route.snapshot.pathFromRoot[1].routeConfig?.path

  }

  ngOnInit(): void {
    this.headerService.backEvent.subscribe((event)=> console.log(event))
  }

  backPage(event:string){
    this.routerBack = event
  }
}
