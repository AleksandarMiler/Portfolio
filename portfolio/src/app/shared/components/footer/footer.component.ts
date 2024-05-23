import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService, TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  
  constructor(public router: Router) {
    // , private translate: TranslateService
    // translate.setDefaultLang('en');
    // translate.use('en');
  }

  public originalText = 'Aleksandar Miler 2024';
  public animatedText = this.originalText;


  public startAnimation(): void {
    const letters = "abcdefghijklmnopqrstuvwxyz0123456789";
    let iteration = 0;
    const interval = setInterval(() => {
      this.animatedText = this.originalText.split("").map((letter, index) => {
        if (index < iteration) {
          return this.originalText[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      }).join("");
      if (iteration >= this.originalText.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 30);
  }


  hasRoute() {
    if (this.router.url == '/') {
      return true
    } else {
      return false
    }
  }
}