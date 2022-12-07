import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {EventsAppComponent} from './events-app.component';
import {EventsListComponent} from "./events/events-list.component";
import {EventThumbnailComponent} from "./events/event-thumbnail.component";
import {NavbarComponent} from "./nav/navbar.component";
import {EventService} from "./events/shared/event.service";
import {ToastrService} from "./common/toastr.service";
import {EventDetailsComponent} from "./events/event-details/event-details.component";
import {RouterModule, RouterOutlet} from "@angular/router";
import {appRoutes} from "./routes";
import {CreateEventComponent} from "./events/create-event.component";
import {Error404Component} from "./errors/404.component";
import {EventRouteActivatorService} from "./events/event-details/event-route-activator.service";
import {EventsListResolverService} from "./events/events-list-resolver.service";

@NgModule({
    imports: [
        BrowserModule,
        RouterOutlet,
        RouterModule.forRoot(appRoutes),
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavbarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
    ],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivatorService,
        EventsListResolverService,
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
