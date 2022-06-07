import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TODO] Crea TODO',
  props<{ texto: string }>()
);
export const toggle = createAction(
  '[TODO] Cambia estado',
  props<{ id: number }>()
);
export const editar = createAction(
  '[TODO] Editar TODO',
  props<{ id: number, texto: string }>()
);
export const eliminar = createAction(
  '[TODO] Elimintar TODO',
  props<{ id: number }>()
);
export const toggleAll = createAction(
  '[TODO] Cambiar estado de todos',
  props<{ value: boolean }>()
);