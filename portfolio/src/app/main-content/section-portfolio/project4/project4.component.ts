import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-project4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project4.component.html',
  styleUrl: './project4.component.scss'
})
export class Project4Component {
  // selected = false;
  isHovering = false;

  public innerWidth: any;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])

  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);

  }
  onMouseEnter() {
    console.log('Hover over image')

    this.isHovering = true;

  }

  onMouseOut() {
    if (this.innerWidth < 500 && this.isHovering == true) { //ovaj deo je proba za innerwidth < 500px, inace je bilo  this.isHovering = false;
      this.isHovering == true;
    } else {
      this.isHovering = false;
    }
    console.log('Hover over image has finished')
  }


  // moveToContactSection() {
  //   setTimeout(() => {
  //     this.selected = true;
  //   }, 500)
  //   this.turnSelectedOff();
  // }

  // turnSelectedOff() {
  //   setTimeout(() => {
  //     this.selected = false;
  //   }, 1400)
  // }

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
