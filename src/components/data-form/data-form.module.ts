import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { DataFormPage } from './../../pages/data-form/data-form';

import { DataFormComponent } from './data-form';

@NgModule({
  declarations: [DataFormComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  entryComponents: [DataFormPage],
  providers: []
})
export class DataFormModule {}
