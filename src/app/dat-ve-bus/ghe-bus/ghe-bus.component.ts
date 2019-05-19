import { Component, OnInit,Input , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe-bus',
  templateUrl: './ghe-bus.component.html',
  styleUrls: ['./ghe-bus.component.scss']
})
export class GheBusComponent implements OnInit {
@Input() seat;
@Output() eventBook = new EventEmitter();
trangThaiChon = false;
  constructor() { }

  ngOnInit() {
  }
  book(){
    this.trangThaiChon = !this.trangThaiChon;
    let objGhe = {
      trangThai: this.trangThaiChon,
      ghe: this.seat,
    };
    // console.log(objGhe);
    this.eventBook.emit(objGhe);
  }

}
