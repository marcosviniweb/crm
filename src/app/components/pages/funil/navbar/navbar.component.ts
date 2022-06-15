import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  router = sessionStorage.getItem("back")
  back = faArrowLeft
  allFunnels = faEye
  addFunnel = faCrosshairs

  constructor() { }

  ngOnInit(): void {
  }

  navButton(){
    sessionStorage.setItem("back", "/funil")
  }


  backPage(e:string){
   if(sessionStorage.getItem("back") == "/funil/all") {
      sessionStorage.setItem("back", "/funil")
    }

    else{
      sessionStorage.setItem("back", "/home")
    }

  }

}
