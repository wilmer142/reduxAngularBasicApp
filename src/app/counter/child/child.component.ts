import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() counter: number;
  @Output() counterChanges = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  multiply(){
    this.counter *= 2;
    this.counterChanges.emit(this.counter);
  }

  divide(){
    this.counter /= 2;
    this.counterChanges.emit(this.counter);
  }

}
