import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { SectionPortfolioComponent } from './section-portfolio/section-portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from '../shared/components/footer/footer.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [NavBarComponent,
     LandingPageComponent, 
     AboutMeComponent, 
     MySkillsComponent, 
     SectionPortfolioComponent, 
     ContactComponent, 
     FooterComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
