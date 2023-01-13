import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EventsAppComponent} from './events-app.component';
import {
    CreateEventComponent,
    CreateSessionComponent,
    DurationPipe,
    EventDetailsComponent,
    EventRouteActivatorService,
    EventService,
    EventsListComponent,
    EventsListResolverService,
    EventThumbnailComponent,
    SessionListComponent,
} from './events';
import {NavbarComponent} from "./nav/navbar.component";
import {RouterModule, RouterOutlet} from "@angular/router";
import {appRoutes} from "./routes";
import {Error404Component} from "./errors/404.component";
import {AuthService} from "./user/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
    CollapsibleWellComponents,
    JQ_TOKEN,
    ModalTriggerDirective,
    SimpleModalComponent,
    Toastr,
    TOASTR_TOKEN
} from "./common";

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
    imports: [
        BrowserModule,
        RouterOutlet,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavbarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponents,
        DurationPipe,
        SimpleModalComponent,
        ModalTriggerDirective,
    ],
    providers: [
        EventService,
        {
            provide: TOASTR_TOKEN,
            useValue: toastr,
        },
        {
            provide: JQ_TOKEN,
            useValue: jQuery,
        },
        EventRouteActivatorService,
        EventsListResolverService,
        AuthService,
        {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {
}

export function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty) {
        return window.confirm('You haven\'t saved this event, do you really want to cancel?')
    }
    return true;
}
