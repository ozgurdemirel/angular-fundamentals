import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {
  CreateEventComponent,
  CreateSessionComponent,
  DurationPipe,
  EventListResolver, EventResolver,
  EventService,
  EventsListComponent,
  EventThumbnailComponent,
  SessionListComponent
} from './events/index';

import {EventsAppComponent} from './events-app.component';
import {NavbarComponent} from './nav/navbar.component';
import {
  CollapsibleWellComponent,
  JQ_TOKEN, ModelTriggerDirective,
  SimpleModalComponent,
  Toastr,
  TOASTR_TOKEN
} from './common/index';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {Error404Component} from './errors/404.component';
import {AuthService} from './user/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
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
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModelTriggerDirective
  ],
  providers: [
    EventService,
    {provide: TOASTR_TOKEN, useValue: toastr},
    {provide: JQ_TOKEN, useValue: jQuery},
    EventListResolver,
    EventResolver,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {
}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(`
        You have not saved this event, do you really want to cancel?
      `);
  }

  return true;
}
