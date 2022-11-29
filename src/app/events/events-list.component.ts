import {Component} from "@angular/core";

@Component({
    templateUrl: 'events-list.component.html',
    selector: 'events-list'
})
export class EventsListComponent {
    event = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:10 am',
        price: 599.99,
        imageUrl: '/assets/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }
}