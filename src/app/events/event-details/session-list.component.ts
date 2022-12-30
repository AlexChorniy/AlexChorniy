import {Component, Input, OnChanges} from "@angular/core";
import {ISession} from "../shared";

@Component({
    selector: 'session-list',
    templateUrl: 'session-list.component.html'
})

export class SessionListComponent implements OnChanges {
    @Input() sessions?: ISession[];
    @Input() filterBy: string;
    visibleSession: ISession[] = [];

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
        this.filterBy = ''
    }

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy)
        }
    }

    filterSessions(filter: string) {
        if (filter === 'all') {
            this.visibleSession = this.sessions?.slice(0) || [];
        } else {
            this.visibleSession = this.sessions?.filter(session => session.level.toLowerCase() === filter) || []
        }
    }
}
