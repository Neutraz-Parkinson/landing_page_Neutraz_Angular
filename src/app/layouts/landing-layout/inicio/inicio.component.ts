import { Component,OnInit, OnDestroy } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  testimonios = [
    {
      titulo: "¡Rápido y Preciso!",
      descripcion: "Jamás pensé que una app podría ser tan precisa en sus pre-diagnósticos. Me siento más tranquilo sabiendo que tengo esta herramienta a mi alcance.",
      imagen: "assets/personas/person_1.jpg",
      nombre: "Rebeca Mendoza",
      stars: [true, true, true, true, true] 
    },
    {
      titulo: "Gran Herramienta Preventiva",
      descripcion: "Agradezco tener la posibilidad de realizar un chequeo preliminar desde la comodidad de mi hogar. Definitivamente es una herramienta que todos deberían probar.",
      imagen: "assets/personas/person_2.jpg",
      nombre: "Hugo Fernández",
      stars: [true, true, true, true, false] 
    },
    {
      titulo: "Tecnología y Salud de la Mano",
      descripcion: "Es asombroso cómo la tecnología puede ayudarnos a cuidar de nuestra salud. Esta app es un claro ejemplo de ello. ¡Recomendada!",
      imagen: "assets/personas/person_3.jpg",
      nombre: "Maria Perez",
      stars: [true, true, true, true, true] 
    }
  ];

  currentIndex = 0;

  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => this.next(), 10000); 
    AOS.init({
      duration: 1200,
    });
  }

  ngOnDestroy() {
    clearInterval(this.intervalId); 
  }

  next() {
    if (this.currentIndex < this.testimonios.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; 
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
