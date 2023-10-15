import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  ngOnInit() {
    AOS.init({
      duration: 1200,
    });
  }

}
