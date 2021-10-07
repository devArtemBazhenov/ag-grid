import { GridDataState } from './models/grid-state.model';

const initialState : GridDataState = {
  selectionType: true,
};

export const gridDataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case '[GridData] ToggleSelectionType':
      return {
        ...state,
        selectionType: !state.selectionType,
      };
    default:
      return state;
  }
};
