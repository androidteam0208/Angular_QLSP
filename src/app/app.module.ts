import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoModule } from './demo/demo.module';
import { NgContentModule } from './ng-content/ng-content.module';
import {InteractionModule} from './interaction/interaction.module';
import {DatVeBusModule} from './dat-ve-bus/dat-ve-bus.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, DemoModule, NgContentModule,InteractionModule, DatVeBusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
