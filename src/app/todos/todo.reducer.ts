import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as TodoAcction from './todos.actions';

export const estadoInicial: Todo[] = [
  new Todo('Salvar el mundo'),
  new Todo('vencer a Thanos'),
  new Todo('Comprar Iron Spider'),

];

export const todoReducer = createReducer(
  estadoInicial,
  on(TodoAcction.crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(TodoAcction.toggle, (state, { id }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        }
      }
      return todo;
    })
  }),
  on(TodoAcction.editar, (state, { id, texto }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          texto
        }
      }
      return todo;
    })
  }),
  on(TodoAcction.eliminar, (state, { id }) => {
    const newState = state.filter(element => element.id !== id);
    return newState;
  }),
  on(TodoAcction.toggleAll, (state, { value }) => {
      return state.map(todo =>{
        return {
          ...todo,
          completado:value
        }
      })
  }),
  on(TodoAcction.limpiarCompletados,(state) =>{
    return state.filter( todo => !todo.completado)
  })
);