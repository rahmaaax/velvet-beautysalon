import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms'; // Import NgForm

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  @ViewChild('contactForm') contactForm!: NgForm; // Use NgForm type

  constructor(private route: ActivatedRoute, private elementRef: ElementRef) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment === 'contact') {
        const contactElement = this.elementRef.nativeElement.querySelector('#contact');
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
  scrollToAbout() {
    const aboutElement = this.elementRef.nativeElement.querySelector('#go2about');
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  showAlert() {
    window.alert('Message received. Our team will reach out to you soon. Thank you for your patience!');
    this.contactForm.resetForm(); // Reset the form after displaying the alert
  }
}
