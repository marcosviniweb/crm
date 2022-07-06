import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

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

  searchIcon = faSearch
  arrowDown = faChevronDown
  userIcon = faUserCircle
  sign = faSignOutAlt

  showHeader = true
  user: any;
  nome:any;
  constructor(
    private headerService:HeaderService,
    public fireservice: AngularFirestore,
    public service: IdeaService,
    private router: Router,
    private afa: AngularFireAuth,
    private authService: AuthService,
    ) {

   }

  ngOnInit() {
    this.headerService.viewEvent.subscribe((event)=> this.viewHeader(event))
    let nome = localStorage.getItem('nomeuser')

     this.nome =  JSON.parse(nome!)

  }

  viewHeader(view:boolean){
    this.showHeader = view
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/'])
  }

  search(e:Event){
    const target = e.target as HTMLInputElement
    const value = target.value

    

  }

}
