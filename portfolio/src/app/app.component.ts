import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// import { LandingPageComponent } from './main-content/landing-page/landing-page.component';
import { MainContentComponent } from './main-content/main-content.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  
    // @ViewChild('arrowOne') arrowOne!: ElementRef;
    // @ViewChild('eight') divEight!: ElementRef;

    // @HostListener('document:scroll', ['$event'])
    // public onViewportScroll() {
    //   const windowHeight = window.innerHeight;
    //   console.log('Height is:', windowHeight);
    //   const boundingRectFive = this.div.nativeElement.rect;
    //   console.log('a sta je bre ovo:', boundingRectFive);

    // }

    //   ngViewAfterInit() {
    // const threshold = 2;
    // const observer = new IntersectionObserver(
    //   (entries)=> {
    //     entries.forEach((entry) => {
    //       if (entry.isIntersecting) {
    //         console.log('Sada je u Viewpoint-u')
    //         observer.disconnect();
    //       }
    //     });
    //   },
    //   { threshold }
    // );
    // observer.observe(this.arrowOne.nativeElement)
    //     // console.log('a sta je bre ovo:', boundingRectFive);
    //   }

   



 


}