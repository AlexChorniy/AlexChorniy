import {Component, Input} from "@angular/core";
import {ISession} from "../shared";

@Component({
    selector: 'session-list',
    templateUrl: 'session-list.component.html'
})

export class SessionListComponent {
    @Input() sessions?: ISession[]

    constructor() {
        this.sessions = [{
            id: 1,
            name: 'session name 1',
            presenter: 'session presenter 1',
            duration: 123,
            level: 'session level 1',
            abstract: 'session abstract 1',
            voters: ['session abstract 1'],
        }]
    }
}
