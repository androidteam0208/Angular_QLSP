import { Component, OnInit, Input , Output , EventEmitter } from '@angular/core';
import { moveEmbeddedView } from '@angular/core/src/view';

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {
  @Input() movie;

  @Output() eventLike = new EventEmitter; //khởi tạo 1 đối tượng EventEmitter mới có thể đẩy dữ liệu

  constructor() { }

  ngOnInit() {
    // console.log(this.movie);
  }

  like(){
    this.eventLike.emit(this.movie) //đẩy dữ liệu ra ngoài
  }

}
