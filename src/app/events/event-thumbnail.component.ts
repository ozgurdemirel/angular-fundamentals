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
        </div>      
    `
})
export class EventThumbnailComponent {
    @Input() event: any;
  

}