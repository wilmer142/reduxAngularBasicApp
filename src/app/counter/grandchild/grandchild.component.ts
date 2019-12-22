import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css']
})
export class GrandchildComponent implements OnInit {

  @Input() counter: number;
  @Output() counterChanges = new EventEmitter<number>(); 
  constructor() { }

  ngOnInit() {
  }

  reset(){
    this.counter = 0;
    this.counterChanges.emit(this.counter);
  }

}
