import { Action, createReducer, on } from '@ngrx/store';
import * as filtroActions from './filtro.actions';

export const initialState:filtroActions.filtrosValidos = 'todos';

export const filtroReducer = createReducer< filtroActions.filtrosValidos,Action>(
  initialState,
  on( filtroActions.setFiltro, (state, { filtro }) => filtro),
)