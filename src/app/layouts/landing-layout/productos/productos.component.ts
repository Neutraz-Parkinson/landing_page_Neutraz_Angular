import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  ngOnInit() {
    AOS.init({
      duration: 1200,
    });
  }

}
