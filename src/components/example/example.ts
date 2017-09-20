import { Component } from '@angular/core';

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
