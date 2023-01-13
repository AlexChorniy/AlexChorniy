import {Component} from "@angular/core";
import {AuthService} from "../user/auth.service";
import {EventService, ISession} from "../events";

@Component({
    templateUrl: './navbar.component.html',
    selector: 'nav-bar',
    styles: [`
      .nav.navbar-nav {
        font-size: 15px
      }

      #searchForm {
        margin-left: 5px
      }

      @media (max-width: 950px) {
        #searchForm {
          display: none
        }
      }

      li > a.active {
        color: #f97924;
      }
    `]
})
export class NavbarComponent {
    searchTerm: string = "";
    foundSessions: ISession[] = [];

    constructor(public auth: AuthService, private eventService: EventService) {
        
    }

    searchSessions(searchTerm: string) {
        this.eventService.searchSessions(searchTerm).subscribe((sessions) => {
            this.foundSessions = sessions;
        });
    }
}