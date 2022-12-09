import {Component} from "@angular/core";
import {AuthService} from "../user/auth.service";

@Component({
    templateUrl: './navbar.component.html',
    selector: 'nav-bar',
    styles: [`
      .nav.navbar-nav {
        font-size: 15px
      }

      #searchForm {
        margin-left: 100px
      }

      @media (max-width: 1200px) {
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
    constructor(public auth: AuthService) {
        
    }
}