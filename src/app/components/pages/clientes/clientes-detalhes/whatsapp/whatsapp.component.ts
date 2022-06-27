import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.scss']
})
export class WhatsappComponent implements OnInit {
  userIcon = faUserCircle
  send = faPaperPlane
  whats = faWhatsapp
  constructor() { }

  ngOnInit(): void {
  }

}
