import {Component, Input, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {IEvent} from './shared/index';

@Component({
  selector: '<event-thumbnail></event-thumbnail>',
  template: `
    <div [routerLink]="['/events',event.id]" class="well thumbnail">
      <h2>  {{event?.name}} </h2>
      <div> {{event?.date}}  </div>
      <div
        [ngClass]="getStartTimeClass()"
        [ngSwitch]="event?.time"
      >
        Time : {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>

      <div> {{event?.price}}  </div>
      <div *ngIf="event?.location">
        <span>Location : {{event?.location?.address}} </span>
        <span class="pad-left">{{event?.location?.city}}\/{{event?.location?.country}} </span>
      </div>
      <div [hidden]="!event?.onlineUrl">
        Online Url : {{event?.onlineUrl}}
      </div>
    </div>
  `,
  styles: [`
    .green {
      color: #003300 !important;
    }

    .bold {
      font-weight: bold
    }

    .thumbnail {
      min-height: 240px;
    }

    .pad-left {
      margin-left: 10px
    }

    .well div {
      color: #bbb
    }
  `]
})
export class EventThumbnailComponent {
  @Input() event: IEvent;

  getStartTimeClass() {
    const isEarlyStart = this.event && this.event.time == '8:00 am';
    return {green: isEarlyStart, bold: isEarlyStart};

    //or you can return space separeted class names like if true [green, bold] else ['']
  }

}
