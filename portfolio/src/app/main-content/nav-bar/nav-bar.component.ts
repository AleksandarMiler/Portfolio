import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService, TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  openingImages = ['burger.png', 'burger2.png', 'burger3.png', 'burger4.png', 'burger5.png'];
  closingImages = ['burger5.png', 'burger6.png', 'burger7.png', 'burger8.png', 'burger.png'];
  open = true;
  buttonPressed: boolean = false;
  showDropMenu: boolean = false;
  startAnimate: boolean = false;

  currentImageOpen: number = 0;
  currentImageClose: number = 0;
  appearanceCount: number = 0;


  mySkills: boolean = false;
  portfolio: boolean = false;
  aboutMe: boolean = false;


  constructor(private elementRef: ElementRef<HTMLElement>, public router: Router, private translate: TranslateService) {
    if (localStorage.getItem('userLanguage') == 'de') {
      translate.use('de');
    } else {
      translate.setDefaultLang('en');
      translate.use('en');
      localStorage.setItem('userLanguage', 'en');
    }
  }



  useLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem('userLanguage', language);
  }


  startAnimationOpen() {
    this.buttonPressed = true;
    this.showDropMenu = true;
    // this.startAnimate = true;
    this.appearanceCount++;
    let interval = setInterval(() => {
      // this.startAnimate = true;
       this.currentImageOpen++;
      // setTimeout(() => {
      //   this.startAnimate = false;
      // }, 200);
      if (this.currentImageOpen == 4) {
        clearInterval(interval);
      }
    }, 100);
    setTimeout(() => {
      this.open = false;
      this.currentImageOpen = 0;
    }, 600);
  }


  startAnimationClose() {
    this.buttonPressed = false;
    this.hideMenu();
    let interval = setInterval(() => {
      this.currentImageClose++;
      if (this.currentImageClose == 4) {
        clearInterval(interval);
      }
    }, 100);
    setTimeout(() => {
      this.open = true;
      this.currentImageClose = 0;
    }, 600);
  }


  goToSection(name: string) {
    this.showFrameAnimation(name);
    setTimeout(() => {
      this.startAnimationClose();
      if (this.hasRoute()) {
        this.executeGoToSection(name);
      } else {
        this.router.navigateByUrl('/');
        this.executeGoToSection(name);
      }
    }, 500);
  }


  showFrameAnimation(name: string) {
    if (name == 'aboutMe') {
      this.aboutMe = true;
      setTimeout(() => {
        this.aboutMe = false;
      }, 500);
    } else if (name == 'mySkills') {
      this.mySkills = true;
      setTimeout(() => {
        this.mySkills = false;
      }, 500);
    } else if (name == 'portfolio') {
      this.portfolio = true;
      setTimeout(() => {
        this.portfolio = false;
      }, 500);
    }
  }


  executeGoToSection(name: string) {
    setTimeout(() => {
      const element: any = document.getElementById(name);
      element.scrollIntoView({ behavior: "smooth" });
    }, 500);
  }


  hasRoute() {
    if (this.router.url == '/') {
      return true
    } else {
      return false
    }
  }

  hideMenu() {
    setTimeout(() => {
      this.showDropMenu = false;
    }, 1000);
  }
}


