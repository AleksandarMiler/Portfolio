import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-project1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project1.component.html',
  styleUrl: './project1.component.scss'
})
export class Project1Component {
  // selected = false;
  isHovering = false;

  public innerWidth: any;

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
    } else if (this.isHovering == true && innerWidth < 1100 && innerWidth > 500) {
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
  // resizeEvent = (event: any): void => {
  //   const currentWidth = event.target.resizeElement.innerWidth;
  //   if (currentWidth > 1100){
  //   //  this.startAnimationArrowLeft();
  //     window.removeEventListener('onresize', this.resizeEvent, true);
  //   }

  // }
  //   ngOnInit() {
  //     window.addEventListener('onresize', this.resizeEvent, true);
  //   }

  //   ngOnDestroy() {
  //     window.removeEventListener('onresize', this.resizeEvent, true);
  //   }





}

// if (this.isHovering == true && innerWidth < 1100)