import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Project1Component } from './project1/project1.component';
import { Project2Component } from './project2/project2.component';
import { Project3Component } from './project3/project3.component';
import { Project4Component } from './project4/project4.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-section-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule, Project1Component, Project2Component, Project3Component, Project4Component],
  templateUrl: './section-portfolio.component.html',
  styleUrl: './section-portfolio.component.scss'
})
export class SectionPortfolioComponent {

  arrowsRight = ['arrow1.png', 'arrow2.png', 'arrow3.png'];
  currentArrow: number = 0;


  // constructor(private translate: TranslateService) {
  //   translate.setDefaultLang('en');
  //   translate.use('en');
  // }


  scrollEvent = (event: any): void => {
    const scrollTopVal = event.target.scrollingElement.scrollTop;
    if (scrollTopVal > 5400) {
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
    }, 50);
  }
}