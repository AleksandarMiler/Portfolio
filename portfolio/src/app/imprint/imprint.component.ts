import { Component } from '@angular/core';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { NavBarComponent } from '../main-content/nav-bar/nav-bar.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [ NavBarComponent, FooterComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

}
