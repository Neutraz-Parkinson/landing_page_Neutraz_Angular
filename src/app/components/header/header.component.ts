import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public isScrolled = false;
  isMobileNavOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 20) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  @ViewChild('navbar', { static: true }) navbar!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const navbar = this.navbar.nativeElement;
  }

  toggleMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
    const navbar = this.navbar.nativeElement;

    if (this.isMobileNavOpen) {
      this.renderer.addClass(navbar, 'navbar-mobile');
    } else {
      this.renderer.removeClass(navbar, 'navbar-mobile');
    }
  }

  closeMobileNav() {
    this.isMobileNavOpen = false;
    const navbar = this.navbar.nativeElement;
    this.renderer.removeClass(navbar, 'navbar-mobile');
  }
}
