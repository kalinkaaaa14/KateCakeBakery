import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';

import {AboutKateComponent} from './about-kate/about-kate.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutKateComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  providers: []
})


export class HomeModule {
}
