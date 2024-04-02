import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {TranslateService, TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [ CommonModule, TranslateModule ],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  arrowsLeft = ['arrowLeft1.png', 'arrowLeft2.png', 'arrowLeft3.png'];
  currentArrowLeft: number = 0;

 
  // groupedSkills: { image: string, text: string }[][] = [];

  // constructor() {
  //   this.groupSkills();
  // }


  // groupedSkills = [];
  // splitSize: number = 2;

  skills = [
    {
      "image":  "angular.png",
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
   

  constructor(private translate: TranslateService) { 
    translate.setDefaultLang('en');
    translate.use('en');
  }
  
  // groupSkills(): void {
  //   const groupSize = 2;
  //   const numberOfGroups = Math.ceil(this.skills.length / groupSize);

  //   for (let i = 0; i < numberOfGroups; i++) {
  //     const startIndex = i * groupSize;
  //     const endIndex = Math.min(startIndex + groupSize, this.skills.length);
  //     const group = this.skills.slice(startIndex, endIndex);
  //     this.groupedSkills.push(group);
  //   }
  // }
  // groupeSkills() {
  //   for (let i = 0; i < this.skills.length; i+= this.splitSize) {
  //     let chunk = this.skills.slice(i, i + this.splitSize);
  //     this.groupedSkills.push(chunk);
  //     console.log(chunk);
      
      
  //   }
  // }


  scrollEvent = (event: any): void => {
    const scrollTopVal = event.target.scrollingElement.scrollTop;
    if (scrollTopVal > 2700){
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
