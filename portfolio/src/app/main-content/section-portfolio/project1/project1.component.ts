import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TranslateService, TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-project1',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project1.component.html',
  styleUrl: './project1.component.scss'
})
export class Project1Component {
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
    if (this.innerWidth < 500 && this.isHovering == true) { 
      this.isHovering == true;
    } else {
      this.isHovering = false;
    }
    console.log('Hover over image has finished')
  }


  checkWidth() {
    if (innerWidth > 1100) {
      return true
    } else {
      return false
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
