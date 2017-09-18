import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExamplePage } from './example';

import { ExampleComponent } from './../../components/example/example';

@NgModule({
  declarations: [
    ExamplePage,
    ExampleComponent
  ],
  imports: [
    IonicPageModule.forChild(ExamplePage)
  ],
})
export class ExamplePageModule {}
