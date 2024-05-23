import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  arrowsLeft = ['arrowLeft1.png', 'arrowLeft2.png', 'arrowLeft3.png'];
  currentArrowLeft: number = 0;
  skills = [
    {
      "image": "angular.png",
      "text": 'Angular'
    },
    {
      "image": "typescript.png",
      "text": "Typescript"
    }
    ,
    {
      "image": 'javascript.png',
      "text": 'JavaScript'
    },
    {
      "image": 'html.png',
      "text": 'HTML'
    },
    {
      "image": 'css.png',
      "text": 'CSS'
    },
    {
      "image": 'firebase.png',
      "text": 'Firebase'
    },
    {
      "image": 'git.png',
      "text": 'Git'
    },
    {
      "image": 'scrum.png',
      "text": 'Scrum'
    },
    {
      "image": 'rest-api.png',
      "text": 'Rest-Api'
    },
    {
      "image": 'material.png',
      "text": 'Material Design'
    }
  ];


  // constructor(private translate: TranslateService) {
  //   translate.setDefaultLang('en');
  //   translate.use('en');
  // }


  scrollEvent = (event: any): void => {
    const scrollTopVal = event.target.scrollingElement.scrollTop;
    if (scrollTopVal > 2700) {
      this.startAnimationArrowLeft();
      window.removeEventListener('scroll', this.scrollEvent, true);
    }
  }

  ngOnInit() {
    window.addEventListener('scroll', this.scrollEvent, true);
  }


  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollEvent, true);
  }


  startAnimationArrowLeft() {
    let interval = setInterval(() => {
      this.currentArrowLeft++;
      if (this.currentArrowLeft == 2) {
        clearInterval(interval);
      }
    }, 50);
  }
}
