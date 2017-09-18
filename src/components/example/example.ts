import { Component } from '@angular/core';

/**
 * Generated class for the ExampleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'example',
  templateUrl: 'example.html'
})
export class ExampleComponent {

  text: string;

  constructor() {
    console.log('Hello ExampleComponent Component');
    this.text = 'Hello World';
  }

}
