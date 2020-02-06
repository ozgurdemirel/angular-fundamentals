import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
    selector: '<event-thumbnail></event-thumbnail>',
    template: `
        <div class="well">
            <h2>  {{event.name}} </h2>
            <div> {{event.date}}  </div>
            <div> {{event.price}}  </div>
            <div>
                <span> {{event.location.address}} </span>
                <span> {{event.location.city}} - {{event.location.country}} </span>
            </div>
            <button class="btn" (click)="clickHandler()">Click!</button>
        </div>
      
    `
})
export class EventThumbnailComponent {
    @Input() event: any;
    @Output() eventClicktest23 = new EventEmitter();

    someVar: any ='test var ...';

    clickHandler() {
        this.eventClicktest23.emit('foo');
    }

    logFoo() {
        console.log('test');
    }

}