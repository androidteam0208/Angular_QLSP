import { Component, OnInit, ViewChildren , QueryList } from '@angular/core';
import {ItemPhimComponent} from './../item-phim/item-phim.component';
// import { ItemContentComponent } from 'src/app/ng-content/item-content/item-content.component';

@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {
  @ViewChildren(ItemPhimComponent) listTagItemPhim: QueryList<ItemPhimComponent>; //4 item phim

  danhSachPhim = [
    { maPhim: 1, tenPhim: "Minions", gia: "75000", hinhAnh: "assets/images/minions.jpg" },
    { maPhim: 2, tenPhim: "Home", gia: "70000", hinhAnh: "assets/images/home.jpg" },
    { maPhim: 3, tenPhim: "Harvie", gia: "80000", hinhAnh: "assets/images/harvie.jpg" },
    { maPhim: 4, tenPhim: "Insideout", gia: "85000", hinhAnh: "assets/images/insideout.jpg" },
  ];

  danhSachLike = [
    {maPhim: 1, tenPhim: "Minions", soLike: 0},
    {maPhim: 2, tenPhim: "Home", soLike: 0},
    {maPhim: 3, tenPhim: "Harvie", soLike: 0},
    {maPhim: 4, tenPhim: "Insideout", soLike: 0},
  ]
  constructor() { }

  ngOnInit() {
  }
  thich(phim){
    console.log(phim.maPhim);
    // this.danhSachLike.map(item =>{
    //   if(item.maPhim === phim.maPhim){
    //     item.soLike++;
    //   }
    // });
    let movie =  this.danhSachLike.find(item => item.maPhim === phim.maPhim);
    movie.soLike++;
    
  }

  themPhim(phim){
    this.danhSachPhim.push(phim);
  }
  viewChildren(){
    this.listTagItemPhim.map(item=>{
      if(item.movie.maPhim ===2){
        item.movie.gia = 100000;
      }
      // console.log(item);
    })
    
  }

}
