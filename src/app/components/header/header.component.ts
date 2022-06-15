import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//userBarIcons
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
//navBar icons
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  search = faSearch
  arrowDown = faChevronDown
  userIcon = faUserCircle
  sign = faSignOutAlt

  //navBar
  routes:string | undefined
  routerBack = ''

  back = faArrowLeft
  allFunnels = faEye
  addFunnel = faCrosshairs
  constructor(private route:ActivatedRoute) {
    this.routes = route.routeConfig?.path
   }

  ngOnInit(): void {
    this.backPage()
  }

  backPage(){
    if(this.routes == 'funil'){
      this.routerBack = '/home'
    }

    if(this.routes == 'funil/all'){
      this.routerBack = '/funil'
    }

    if(this.routes == 'funil/new'){
      this.routerBack = '/funil'
    }

    if(this.routes == 'funil/all/edit'){
      this.routerBack = '/funil/all'
    }

    if(this.routes == 'funil/all/add'){
      this.routerBack = '/funil/all'
    }
    if(this.routes == 'vendedor'){
      this.routerBack = '/home'
    }
    if(this.routes == 'vendedor/new'){
      this.routerBack = '/vendedor'
    }

  }
}
