import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enviar-email',
  templateUrl: './enviar-email.component.html',
  styleUrls: ['./enviar-email.component.scss']
})
export class EnviarEmailComponent implements OnInit {

  backPage = 'vendendor/details/email';

  constructor() { }

  ngOnInit(): void {
  }

}
