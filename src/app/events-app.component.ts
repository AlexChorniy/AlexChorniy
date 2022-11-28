import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
    <h2>Hello World {{title}}</h2>
    <img src="../assets/basic-shield.png" alt="image" />
  `,
})
export class EventsAppComponent {
  title = 'Events app';
}
