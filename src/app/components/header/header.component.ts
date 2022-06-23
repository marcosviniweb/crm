import { Component, OnInit } from '@angular/core';

//userBarIcons
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { HeaderService } from './header.service';

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

  showHeader = true

  constructor(private headerService:HeaderService) {

   }

  ngOnInit() {
    this.headerService.viewEvent.subscribe((event)=> this.viewHeader(event))
  }

  viewHeader(view:boolean){
    this.showHeader = view
  }

}
