import * as todoActions from './../todos.actions';
import { AppState } from './../../app.reducer';
import { Todo } from './../models/todo.model';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('inputReference') txtReference !: ElementRef;
  chkCompletado!: FormControl;
  txtInput!: FormControl;
  editando = false;
  constructor(private store: Store<AppState>) { }
  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    this.chkCompletado.valueChanges.subscribe(valor => {
      this.store.dispatch(todoActions.toggle({ id: this.todo.id }))

    })
  }
  editar() {
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);
    setTimeout(() => {
      this.txtReference.nativeElement.select();
    }, 1);
  }
  terminarEdicion() {
    this.editando = false;
    if (this.txtInput.invalid) return;
    if (this.txtInput.value === this.todo.texto) return;
    this.store.dispatch(todoActions.editar({ id: this.todo.id, texto: this.txtInput.value }))
  }
  deleteItem() {
    this.store.dispatch(todoActions.eliminar({ id: this.todo.id }));
  }

}
