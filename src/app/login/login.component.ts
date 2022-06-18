import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userLogin: User = {};

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

 async login(){
     console.log(this.userLogin)
    try {
      await this.authService.login(this.userLogin);
      this.router.navigate(['/home'])
    } catch (error) {
      console.log(error)
    } finally {
     // this.loading.dismiss();
    }
  }

}
