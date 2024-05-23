import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  selected = false;
  arrowIsDown = true;

  // constructor(private translate: TranslateService) {
  //   translate.setDefaultLang('en');
  //   translate.use('en');
  // }


  moveToContactSection() {
    setTimeout(() => {
      this.selected = true;
      this.goDown();
    }, 500)
    this.turnSelectedOff();
    
  }


  turnSelectedOff() {
    setTimeout(() => {
      this.selected = false;
    }, 1400)
  }


  // useLanguage(language: string): void {
  //   this.translate.use(language);
  // }

  
  goDown() {
    const element: any = document.getElementById('contact');
    element.scrollIntoView({ behavior: "smooth" });
  }

}



