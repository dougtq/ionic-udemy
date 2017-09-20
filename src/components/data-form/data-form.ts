import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'

/**
 * Generated class for the DataFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'data-form',
  templateUrl: 'data-form.html'
})

export class DataFormComponent {

  form : FormGroup;

  constructor(private FormBuilder : FormBuilder) {

    this.form = this.FormBuilder.group({
     nome: [null],
     email: [null]
    })
  }

}
