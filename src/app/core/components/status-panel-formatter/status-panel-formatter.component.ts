import { Component, OnDestroy } from '@angular/core';
import { IStatusPanelParams } from 'ag-grid-community';
import { Store } from '@ngrx/store';
import { ToggleSelectionType } from '../../store/grid-data.actions';
import { SelectionType } from '../../store/grid-data.selectors';

@Component({
  selector: 'app-status-panel-formatter',
  templateUrl: './status-panel-formatter.component.html',
  styleUrls: ['./status-panel-formatter.component.scss'],
})
export class StatusPanelFormatterComponent implements OnDestroy{
  params!: IStatusPanelParams;
  all: number = 0;
  selected: number = 0;

  constructor(private store: Store) {}

  agInit(params: IStatusPanelParams): void {
    this.params = params;
    this.params.api.addEventListener('firstDataRendered', () => {
      this.all = params.api.getModel().getRowCount();
      this.selected = params.api.getSelectedNodes().length;

      this.store.select(SelectionType).subscribe(res => {
        params.columnApi.setColumnVisible('selected', res);
        params.api.sizeColumnsToFit();
      });
    });
    this.params.api.addEventListener('rowSelected', () => {
      this.selected = params.api.getSelectedNodes().length;
    });
  }

  toggleSelection(): void {
    this.store.dispatch(ToggleSelectionType());
  }

  ngOnDestroy(): void {
    this.params.api.removeEventListener('firstDataRendered', () => {});
    this.params.api.removeEventListener('rowSelected', () => {});
  }
}
