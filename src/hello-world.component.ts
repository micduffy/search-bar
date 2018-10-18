import { Component } from '@angular/core';

@Component({
  selector: 'efx-hello-world',
  template: 'Hello world from the {{ projectTitle }} module!'
})
export class HelloWorldComponent {
  projectTitle: string = 'search bar';
}
