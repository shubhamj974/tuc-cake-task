import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavBarShowHide]'
})
export class NavBarShowHideDirective {

  constructor() { }

  @HostListener('click', ['$event'])
  OnbadShowHide(ele: HTMLAnchorElement) {
    const bar = ele.target as unknown as HTMLButtonElement
    bar.nextElementSibling?.classList.toggle('show')
  }

}
