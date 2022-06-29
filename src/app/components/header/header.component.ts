import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

//userBarIcons
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { IdeaService } from 'src/app/service/idea.service';
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
  user: any;
  constructor(
    private headerService:HeaderService,
    public fireservice: AngularFirestore,
    public service: IdeaService,
    private router: Router,
    private afa: AngularFireAuth,
    ) {

   }

  ngOnInit() {
    this.headerService.viewEvent.subscribe((event)=> this.viewHeader(event))

    // this.service.getUserId().subscribe((user)=>{
    //    this.user =user[0]
    // });
  }

  viewHeader(view:boolean){
    this.showHeader = view
  }

}
