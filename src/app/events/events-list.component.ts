import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `
    <div>
            <h1>Upcoming angular events</h1>
            <hr/>
            <event-thumbnail 
            [event] = "event1"
            >
            </event-thumbnail>        
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



}