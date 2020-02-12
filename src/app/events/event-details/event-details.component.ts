import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'event-detils',
    templateUrl: './event-details.component.html',
    styles: [`
        .container  {padding-left: 20px;padding-right:20px}
        .event-image {height: 100px;}
    `]
})
export class EventDetailsComponent implements OnInit {

    event: any;

    constructor(
        private evenService: EventService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        // throw new Error("Method not implemented.");
        this.event = this.evenService.getEvent(+this.route.snapshot.params['id']);
    }

}