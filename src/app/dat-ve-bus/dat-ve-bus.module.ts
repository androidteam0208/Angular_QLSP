import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatVeBusComponent } from './dat-ve-bus.component';
import { DanhSachGheBusComponent } from './danh-sach-ghe-bus/danh-sach-ghe-bus.component';
import { GheBusComponent } from './ghe-bus/ghe-bus.component';

@NgModule({
  declarations: [DatVeBusComponent, DanhSachGheBusComponent, GheBusComponent],
  exports:[DatVeBusComponent],
  imports: [
    CommonModule
  ]
})
export class DatVeBusModule { }
