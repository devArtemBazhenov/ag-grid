import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GridDataState } from './models/grid-state.model';

const gridDataFeature = createFeatureSelector<GridDataState>('gridDataReducer');

export const SelectionType = createSelector(gridDataFeature, (state: GridDataState) => state.selectionType);
