import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { TranslateService, TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})


export class ContactComponent implements OnInit {
  clickName: boolean = false;
  checkboxState: boolean = false;
  checkboxCount: number = 0;
  success: boolean = false;
  public innerWidth: any;
  showBtnInfo: boolean = false;


  @HostListener('window:resize', ['$event'])

  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }
  constructor(private elementRef: ElementRef<HTMLElement>, private translate: TranslateService) {
    // translate.setDefaultLang('en');
    // translate.use('en');
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    checkbox: ""
  }
  mailTest = true;

  post = {
    endPoint: 'https://aleksandar-miler.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            //eventuelno diajalog sa porukom da je email uspesno poslat
            ngForm.resetForm();
            this.showSuccesAnimation();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }


  showSuccesAnimation() {
    this.success = true;
    setTimeout(() => {
      this.success = false;
    }, 3500);
  }


  showInputAnim() {
    setTimeout(() => {
      this.clickName = true;
    }, 50);
  }


  hideInputAnim() {
    setTimeout(() => {
      this.clickName = false;
    }, 50);
  }


  setCheckBox(event: any) {
    if (event.target.checked) {
      console.log('checkbox checked');
      this.checkboxCount++;
      this.checkboxState = true;
    } else {
      console.log('checkbox is not checked');
      this.checkboxState = false;
    }
  }

  goUp() {
    const element: any = document.getElementById('landingPage');
    element.scrollIntoView({ behavior: "smooth" });
  }


  changeBtnContent() {
    if (innerWidth > 500) {
      return 'Send1'
    } else {
      return 'Send2'
    }
  }

  showInfo() {
    this.showBtnInfo = true;
  }

  hideInfo() {
    this.showBtnInfo = false;
  }
}