import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {EventService, ISession} from "./shared";

@Component({
    templateUrl: 'create-event.component.html',
    styles: [`
      em {
        float: right;
        color: #e05c65;
        padding-right: 5px;
      }

      .error input {
        background-color: #E3C3C5;
      }

      .error ::-webkit-input-placeholder {
        color: #999;
      }

      error ::-moz-placeholder {
        color: #999;
      }

      .error :-moz-placeholder {
        color: #999;
      }

      .error :-ms-input-placeholder {
        color: #999;
      }

    `],
})

export class CreateEventComponent {
    event: {
        id: number;
        name: string;
        date: Date | null;
        time: string;
        price: number | null;
        location: {
            address: string,
            city: string,
            country: string,
        };
        sessions: ISession[];
        onlineUrl: string;
        imageUrl: string;
    };
    isDirty: boolean = true;

    constructor(private router: Router, private eventService: EventService) {
        this.event = {
            id: 7,
            name: '',
            date: null, // new Date()
            time: '', // '28/12/22'
            price: null,
            location: {
                address: '',
                city: '',
                country: '',
            },
            sessions: [],
            onlineUrl: '', // http://ngspectacular.com
            imageUrl: '', // http://ngspectacular.com/logo.png
        }
    }

    cancel() {
        this.router.navigate(['/events'])
    }

    saveEvent(formValues: any) {
        this.eventService.saveEvent(formValues)
        this.isDirty = false
        this.router.navigate(['/events'])
    }
}
