import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { DataFormPage } from './data-form';

import { DataFormComponent } from './../../components/data-form/data-form';

@NgModule({
  declarations: [
    DataFormPage, DataFormComponent
  ],
  imports: [
    IonicPageModule.forChild(DataFormPage),
  ],
})
export class DataFormPageModule {}
