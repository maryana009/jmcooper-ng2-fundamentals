/**
 * NPM packages.
 */
import {Routes} from '@angular/router';

/**
 * Project packages.
 */
import {CreateEventComponent}   from './events/create-event.component';
import {EventDetailsComponent}  from './events/event-details/event-details.component';
import {EventsListComponent}    from './events/events-list.component';

export const appRoutes:Routes = [
    /** @name events */
    /**
     * IMPORTANT: The order that you specify the routes really matter, because Angular can't distinguish between
     * 'events/new' and 'events/:id' without thinking that 'new' is actually a value for ':id'.
     * So, if you put the 'events/new' route first, it will match it first and not give you that problem.
     */
    {path: 'events/new', component: CreateEventComponent},
    {path: 'events', component: EventsListComponent},
    {path: 'events/:id', component: EventDetailsComponent},

    /** @name default */
    {path: '', redirectTo: 'events', pathMatch: 'full'}
];