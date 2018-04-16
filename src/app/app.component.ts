import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-topnav></app-topnav>
    <router-outlet></router-outlet>
    `
})
export class AppComponent {

  constructor() {

  }
}

