import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TranslateService, TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-project2',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project2.component.html',
  styleUrl: './project2.component.scss'
})
export class Project2Component {
  isHovering = false;

  public innerWidth: any;

  
  // constructor(private translate: TranslateService) {
  //   translate.setDefaultLang('en');
  //   translate.use('en');
  // }
  

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])


  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }


  onMouseEnter() {
    this.isHovering = true;
  }


  onMouseOut() {
    if (this.innerWidth < 500 && this.isHovering == true) { //ovaj deo je proba za innerwidth < 500px, inace je bilo  this.isHovering = false;
      this.isHovering == true;
    } else {
      this.isHovering = false;
    }
  }


  checkWidthAnimation() {
    if (this.isHovering == true && innerWidth > 1100) {
      return 'slide'
    } else if (this.isHovering == true && innerWidth < 1100) {
      return 'slideDown'
    } else {
      return null
    }
  }

  
  checkWidthAnimationArrow() {
    if (this.isHovering == true && innerWidth > 1100) {
      return 'rotate'
    } else if (this.isHovering == true && innerWidth < 1100) {
      return 'rotateMobil'
    } else {
      return null
    }
  }

}

