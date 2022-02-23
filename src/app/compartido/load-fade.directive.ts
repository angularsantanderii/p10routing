import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLoadFade]'
})
export class LoadFadeDirective {

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) { }


    ngOnInit() {
        this.renderer.addClass(this.elementRef.nativeElement, 'fade');
        const timer = setTimeout(() => {
          this.renderer.addClass(this.elementRef.nativeElement, 'show');
          clearTimeout(timer);
        }, 100)
    }

}
