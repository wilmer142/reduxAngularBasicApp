import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  counter: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('counter').subscribe(counter => {
      this.counter = counter;
    })
  }

  multiply(){
    this.counter *= 2;
    // this.counterChanges.emit(this.counter);
  }

  divide(){
    this.counter /= 2;
    // this.counterChanges.emit(this.counter);
  }

  resetGrandChild(newCounter: number){
    this.counter = newCounter;
    // this.counterChanges.emit(this.counter);
  }

}
