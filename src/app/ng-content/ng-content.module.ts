import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgContentComponent } from './ng-content.component';
import { ItemContentComponent } from './item-content/item-content.component';

@NgModule({
  declarations: [NgContentComponent, ItemContentComponent],
  exports: [NgContentComponent],
  imports: [
    CommonModule
  ]
})
export class NgContentModule { }
