import { Component } from '@angular/core';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { NavBarComponent } from '../main-content/nav-bar/nav-bar.component';
import { TranslateService, TranslateModule } from "@ngx-translate/core";
import { CommonModule } from '@angular/common';
import { LegalComponent } from '../main-content/legal/legal.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [ CommonModule, NavBarComponent, FooterComponent, TranslateModule, LegalComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  
  //   constructor(private translate: TranslateService) {
  // // //   translate.setDefaultLang('en');
  // // //   translate.use('en');
  //  }
}
