import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appEqualCardHeight]'
})
export class EqualCardHeightDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {

    const cards = this.el.nativeElement.querySelectorAll('.card');

    let maxHeight = 0;
    cards.forEach((card: HTMLElement) => {
      const cardHeight = card.offsetHeight;
      if (cardHeight > maxHeight) {
        maxHeight = cardHeight;
      }
    });

    cards.forEach((card: HTMLElement) => {
      this.renderer.setStyle(card, 'height', `${maxHeight}px`);
    });
  }
}
