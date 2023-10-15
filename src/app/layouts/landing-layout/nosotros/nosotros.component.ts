import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent {

  ngOnInit() {
    AOS.init({
      duration: 1200,
    });
  }

}
