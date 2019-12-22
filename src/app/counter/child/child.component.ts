import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { MultiplyAction, DivideAction } from '../counter.actions';

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
    const multiply = new MultiplyAction(2);
    this.store.dispatch(multiply);
  }

  divide(){
    const divide = new DivideAction(2);
    this.store.dispatch(divide);
  }

}
