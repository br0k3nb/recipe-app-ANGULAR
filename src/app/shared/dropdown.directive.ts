import { Directive, HostListener, HostBinding} from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') open: boolean;

    constructor() {}

    @HostListener('click', ['$event.target']) onClick(element: HTMLElement) {
        console.log(element);
        if(!this.open) this.open = true;
        else this.open = false;
    }

}