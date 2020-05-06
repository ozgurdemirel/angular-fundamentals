import {Component, OnChanges, OnInit} from '@angular/core';
import {EventService} from '../shared/event.service';
import {ActivatedRoute, Params} from '@angular/router';
import {IEvent, ISession} from '../shared';

@Component({
  selector: 'event-detils',
  templateUrl: './event-details.component.html',
  styles: [`
    .container {
      padding-left: 20px;
      padding-right: 20px
    }

    .event-image {
      height: 100px;
    }

    a {
      cursor: pointer
    }
  `]
})
export class EventDetailsComponent implements OnInit, OnChanges {


  event: IEvent;
  addMode: boolean;
  filterBy: string = 'all';
  sortBy: string = 'votes';

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
    // this.route.params.subscribe(params => {
    //   this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    // });


    this.route.params.forEach((params: Params) => {
      this.event = this.route.snapshot.data['event'];
      this.addMode = false;
    });

    // this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

  ngOnChanges(): void {
    this.route.data.forEach((data) => {
      this.event = data['event'];
      this.addMode = false;
    });
  }

  addSessions() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }

}
