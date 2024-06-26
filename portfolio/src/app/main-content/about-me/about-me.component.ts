import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})

export class AboutMeComponent {
  arrowsRight = ['arrow1.png', 'arrow2.png', 'arrow3.png'];
  currentArrow: number = 0;
  selected = false;

  scrollEvent = (event: any): void => {
    const scrollTopVal = event.target.scrollingElement.scrollTop;
    if (scrollTopVal > 1200) {
      this.startAnimationArrow();
      window.removeEventListener('scroll', this.scrollEvent, true);
    }

  }
  ngOnInit() {
    window.addEventListener('scroll', this.scrollEvent, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollEvent, true);
  }


  startAnimationArrow() {
    let interval = setInterval(() => {
      this.currentArrow++;
      if (this.currentArrow == 2) {
        clearInterval(interval);
      }
    }, 100);
  }


  moveToContactSection() {
    setTimeout(() => {
      this.selected = true;
    }, 400)
    this.turnSelectedOff();
    setTimeout(() => {
      this.scrollDown();
    }, 1000);
  }


  turnSelectedOff() {
    setTimeout(() => {
      this.selected = false;
    }, 1400)
  }


  scrollDown() {
    const element: any = document.getElementById('contact');
    element.scrollIntoView({ behavior: "smooth" });
  }
}


