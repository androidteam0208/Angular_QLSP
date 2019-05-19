import { Component, OnInit, ViewChild } from '@angular/core';
import {DanhSachPhimComponent} from './danh-sach-phim/danh-sach-phim.component';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {
  @ViewChild(DanhSachPhimComponent) dsPhim : DanhSachPhimComponent ; //KHIA BAO BIEN dsPhim TRO TOI COMPONENT DanhSachPhimComponent

  constructor() { }

  ngOnInit() {
  }
  themPhim(maPhim, tenPhim, gia, hinhAnh){
    let objPhim ={maPhim, tenPhim, gia , hinhAnh};
    this.dsPhim.themPhim(objPhim);
  };
  
  

}
