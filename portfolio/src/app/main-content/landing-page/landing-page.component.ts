import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  selected = false;

  
  moveToContactSection() {
    setTimeout(() => {
      this.selected = true;
    }, 500)
    this.turnSelectedOff();
  }

  turnSelectedOff() {
    setTimeout(() => {
      this.selected = false;
    }, 1400)
  }
  //  constructor(private elementRef: ElementRef) { }

  // ngOnInit(): void {
  //   this.setupAnimation();
  // }


  
  // setupAnimation(): void {
  //   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //   let interval: any = null;

  //   const headerElement = this.elementRef.nativeElement.querySelector(".header");

  //   if (headerElement) {
  //     headerElement.addEventListener('mouseover', (event: MouseEvent) => {
  //       let iteration = 0;
  //       clearInterval(interval);
  //       interval = setInterval(() => {
  //         if (!headerElement.dataset.value) return;
  //         headerElement.innerText = headerElement.innerText.split("").map((index: any) => {
  //           if (index < iteration) {
  //             return headerElement.dataset.value[index];
  //           }
  //           return letters[Math.floor(Math.random() * 26)];
  //         }).join("");

  //         if (iteration >= headerElement.dataset.value.length) {
  //           clearInterval(interval);
  //         }
  //         iteration += 1 / 3;
  //       }, 30);
  //     });
  //   }
  // }

  arrowIsDown = true;
}






// letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// interval: any;


// change() {

// const element: any = document.querySelector('.developer');

// element.onmouseover =  ( event =>  {
//     let iteration = 0;
//      clearInterval(this.interval);
//      this.interval = setInterval(() => {
//          event.target.innerText = event.target.innerText
//              .split("")
//              .map((index: number) => {
//                  if (index < iteration) {
//                      return event.target.dataset.value[index];
//                  }
//                  return this.letters[Math.floor(Math.random() * 26)]
//              })
//              .join("");
//          if (iteration >= event.target.dataset.value.length) {
//              clearInterval(this.interval);
//          }
//             iteration += 1 / 3;
//          }, 30);
//      }

// )}

 

