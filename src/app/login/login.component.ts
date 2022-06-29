import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { HeaderService } from '../components/header/header.service';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userLogin: User = {};
  message: string = '';
  constructor(
    private headerService:HeaderService,
    private authService: AuthService,
    private router: Router,
    // private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.headerService.onOffHeader(false);
    // this.toastr.success('Hello world!', 'Toastr fun!');
  }

 async login(){
     //console.log(this.userLogin)
    try {
      await this.authService.login(this.userLogin)

      this.router.navigate(['/home'])
    } catch (error) {
      let errorMessage = "Failed to do something exceptional";
      if (error instanceof Error) {
        errorMessage = error.message;

        console.log(errorMessage);
        switch(errorMessage){
          case 'auth/email-already-in-use':
          this.message = ' E-mail sendo usado!';
              break;
              case 'auth/invalid-email':
                this.message = ' E-mail inválido!';
                  break;
                  case 'auth/weak-password':
                    this.message = ' Senha pequena, digite uma senha maior ou igual a 6 caracteres';
                      break;
                      case 'The email address is badly formatted.':
                        this.message = 'Formato de email inválido!';
                            break;
                            case 'There is no user record corresponding to this identifier. The user may have been deleted.':
                              this.message = 'Não há registro de usuário correspondente a este identificador. O usuário pode ter sido excluído';
                                  break;
                                  case 'The password is invalid or the user does not have a password.':
                                    this.message = 'A senha é inválida ou o usuário não possui uma senha.';
                                        break;

        }
        alert(this.message)
      }

    }
  }

}
