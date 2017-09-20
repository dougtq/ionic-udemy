
import { DataFormModule } from './../components/data-form/data-form.module';
import { BrowserModule } from '@angular/platform-browser'
import { ErrorHandler, NgModule } from '@angular/core'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'

import { MyApp } from './app.component'
import { ExampleComponent } from './../components/example/example';

import { HomePage } from '../pages/home/home'
import { ListPage } from '../pages/list/list'
import { ExamplePage } from './../pages/example/example'
import { ContactPage } from '../pages/contact/contact'


import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [MyApp, HomePage, ListPage, ExamplePage, ExampleComponent, ContactPage],
  imports: [BrowserModule, ReactiveFormsModule, DataFormModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, ListPage, ExamplePage, ContactPage],
  providers: [StatusBar, SplashScreen, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule {}
