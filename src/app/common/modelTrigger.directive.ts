import {Directive, ElementRef, Inject, Input, OnInit} from '@angular/core';
import {JQ_TOKEN} from './jQuery.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[modalTrigger]'
})
export class ModelTriggerDirective implements OnInit {

  private el: HTMLElement;
  @Input('modalTrigger') modalId: string;


  constructor(
    ref: ElementRef,
    @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }

  ngOnInit(): void {
    this.el.addEventListener('click', e => {
      this.$(`#${this.modalId}`).modal({});
    });
  }

}
