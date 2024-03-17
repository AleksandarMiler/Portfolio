import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from '../main-content/nav-bar/nav-bar.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { PolicyContentComponent } from './policy-content/policy-content.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [ CommonModule, NavBarComponent, FooterComponent, PolicyContentComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
