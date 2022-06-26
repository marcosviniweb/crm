import { Component, OnInit } from '@angular/core';

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.scss']
})
export class WhatsappComponent implements OnInit {

  whats = faWhatsapp
  constructor() { }

  ngOnInit(): void {
  }

}
