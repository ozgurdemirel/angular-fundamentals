import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `
    <div>
            <h1>Upcoming angular events</h1>
            <hr/>
            <event-thumbnail #thumbnail
            (eventClicktest23) ="handleClickEvent($event)"
            [event] = "event1"
            >
            </event-thumbnail>        
            <h3>{{thumbnail.someVar}}</h3>
            <button class="btn" (click)="thumbnail.logFoo()">log something</button>
    </div>
    `
})
export class EventsListComponent {
    event1 = {
        name: 'test event',
        date: '9/12/2020',
        price: 599.88,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '34000 CT',
            city: 'Amsterdam',
            country: 'Netherlands'
        }
    }

    handleClickEvent(data: any) {
        console.log(data);
    }

}