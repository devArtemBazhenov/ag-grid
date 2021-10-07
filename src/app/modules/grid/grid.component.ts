import { Component, Self } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FetchDataService } from 'src/app/core/services/fetch-data.service';
import { RowDataModel } from 'src/app/core/models/row-data.model';
import { ImageFormatterComponent } from 'src/app/core/components/image-formatter/image-formatter.component';
import { LinkFormatterComponent } from 'src/app/core/components/link-formatter/link-formatter.component';
import { StatusPanelFormatterComponent } from 'src/app/core/components/status-panel-formatter/status-panel-formatter.component';
import { SelectionType } from 'src/app/core/store/grid-data.selectors';
import { HeaderCheckboxComponent } from 'src/app/core/components/header-checkbox/header-checkbox.component';
import { CheckboxFormatterComponent } from 'src/app/core/components/checkbox-formatter/checkbox-formatter.component';
import { API_LINK, YOUTUBE_START_LINK } from './const/api-link';
import {ColDef, ColumnApi, GridApi } from 'ag-grid-community';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  providers: [FetchDataService],
})
export class GridComponent {
  frameworkComponents: any;
  statusBar: any;
  columnDefs: ColDef[];
  defaultColDef: any;
  rowData$: Observable<RowDataModel[]>;
  selectionType$: Observable<boolean>;

  constructor(@Self() private fetchDataService: FetchDataService, private store: Store) {
    this.columnDefs = [
      { field: 'selected', headerComponent: 'headerCheckboxComponent', cellRendererFramework: CheckboxFormatterComponent, maxWidth: 60, hide: false },
      { field: 'thumbnails', headerName: '', cellRendererFramework: ImageFormatterComponent, maxWidth: 200 },
      { field: 'publishedAt', headerName: 'Published on', maxWidth: 250 },
      { field: 'title', headerName: 'Video Title', cellRendererFramework: LinkFormatterComponent },
      { field: 'description', headerName: 'Description' },
    ];
    this.defaultColDef = { suppressMenu: true };
    this.frameworkComponents = {
      statusPanelFormatterComponent: StatusPanelFormatterComponent,
      headerCheckboxComponent: HeaderCheckboxComponent,
    };
    this.statusBar = {
      statusPanels: [{ statusPanel: 'statusPanelFormatterComponent' }],
    };

    this.rowData$ = this.fetchDataService.fetchData(API_LINK).
      pipe(
        map(data => {
          return data.items.map((rowData: any) => (
            {
              thumbnails: rowData.snippet.thumbnails.default.url,
              publishedAt: rowData.snippet.publishedAt,
              title: { title: rowData.snippet.title, videoId: rowData.id.videoId },
              description: rowData.snippet.description,
              selected: false,
            }),
          );
        },
        ),
      );
    this.selectionType$ = this.store.select(SelectionType);
  }

  onFirstDataRendered(params: any): void {
    params.api.sizeColumnsToFit();
  }

  getContextMenuItems(params: any) {
    if (params.column.colId !== 'title'){
      return [
        'copy',
        'copyWithHeaders',
        'paste',
      ];
    } else {
      return [
        'copy',
        'copyWithHeaders',
        'paste',
        {
          name: 'Open in new tab',
          action: function () {
            window.open(YOUTUBE_START_LINK + params.value.videoId, '_blank');
          },
          cssClasses: ['redFont', 'bold'],
        },
      ];
    }
  }

  api!: GridApi;
  columnApi!: ColumnApi;

  public onGridReady(params: any) {
    this.api = params.api;
    this.columnApi = params.columnApi;
  }
}

