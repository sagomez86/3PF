import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextoa20px]'
})
export class Textoa20pxDirective implements OnInit{
  

  constructor(
    private elemento: ElementRef,
    private renderer: Renderer2
  ) { }


  ngOnInit(): void {
    this.renderer.setStyle(this.elemento.nativeElement, "fontSize", "20px");
  }

}
