import { Directive, Input, ElementRef, Renderer2, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective  implements OnInit{
  @Input() category;
  @HostBinding('class') addclass;

  constructor(private el:ElementRef,private renderer:Renderer2) {
      this.renderer.setStyle(this.el.nativeElement,'background-color','green');
   }
   ngOnInit()
   {
     if (this.category == 'personal')
     {
      this.renderer.setStyle(this.el.nativeElement,'background-color','#c97474');
      this.addclass = 'personal';
     }
    else if (this.category == 'nature')
    {
      this.renderer.setStyle(this.el.nativeElement,'background-color','lightgreen');
      this.addclass = 'nature';
    }
    else if (this.category == 'politics')
    {
      this.renderer.setStyle(this.el.nativeElement,'background-color','lightblue');
      this.addclass = 'politics';
    }
    else if (this.category == 'technical'){
      this.renderer.setStyle(this.el.nativeElement,'background-color','lightgray');
      this.addclass = 'technical';
    }
   }
   @HostListener('mouseover')
   mouseover()
   {
    this.renderer.setStyle(this.el.nativeElement,'opacity','0.5');
   }
   @HostListener('mouseout')
   mouseout()
   {
    this.renderer.setStyle(this.el.nativeElement,'opacity','1');
   }
}
