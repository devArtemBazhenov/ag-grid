import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-checkbox-formatter',
  templateUrl: './checkbox-formatter.component.html',
  styleUrls: ['./checkbox-formatter.component.scss'],
})
export class CheckboxFormatterComponent implements OnDestroy{
  params: any;
  selected: boolean = false;
  rowIndex: number = 0;

  agInit(params: any): void {
    this.params = params;
    this.rowIndex = params.rowIndex;
    this.params.api.addEventListener('selectionChanged', () => {
      this.selected = this.params.api.getDisplayedRowAtIndex(this.rowIndex).selected;
    });
    this.selected = this.params.api.getDisplayedRowAtIndex(this.rowIndex).selected;
  }

  toggleCheckbox(): void {
    this.params.api.getDisplayedRowAtIndex(this.rowIndex).setSelected(!this.selected);
  }

  ngOnDestroy(): void {
    this.params.api.removeEventListener('selectionChanged', () => {});
  }
}
