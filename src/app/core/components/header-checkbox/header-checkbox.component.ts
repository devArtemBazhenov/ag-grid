import { Component, OnDestroy } from '@angular/core';
import {GridOptions} from "ag-grid-community";

@Component({
  selector: 'app-header-checkbox',
  templateUrl: './header-checkbox.component.html',
  styleUrls: ['./header-checkbox.component.scss'],
})
export class HeaderCheckboxComponent implements OnDestroy {
  params: any;
  selected: boolean = false;

  agInit(params: any): void {
    this.params = params;
    const displayedRowCount = this.params.api.getDisplayedRowCount();
    if (displayedRowCount) {
      this.selected = displayedRowCount === this.params.api.getSelectedNodes().length;
    }
    this.params.api.addEventListener('rowSelected', () => {
      this.selected = this.params.api.getDisplayedRowCount() === this.params.api.getSelectedNodes().length;
    });
  }

  toggleAll(): void {
    if (this.selected) {
      this.params.api.deselectAll();
    } else {
      this.params.api.selectAll();
    }
    this.selected = !this.selected;
  }

  ngOnDestroy(): void {
    this.params.api.removeEventListener('rowSelected', () => {});
  }
}
