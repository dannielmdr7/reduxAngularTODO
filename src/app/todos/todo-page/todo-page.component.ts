import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { toggleAll } from '../todos.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  completado = false;

  constructor( private store:Store<AppState> ) { }

  ngOnInit(): void {
  }
  toggleAlls(){
    this.completado = !this.completado;
    this.store.dispatch( toggleAll({value: this.completado}) )

  }

}
