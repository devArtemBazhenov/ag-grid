import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GridComponent } from './modules/grid/grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { ImageFormatterComponent } from './core/components/image-formatter/image-formatter.component';
import { LinkFormatterComponent } from './core/components/link-formatter/link-formatter.component';
import { StatusPanelFormatterComponent } from './core/components/status-panel-formatter/status-panel-formatter.component';
import { StoreModule } from '@ngrx/store';
import { gridDataReducer } from './core/store/grid-data.reducer';
import { HeaderCheckboxComponent } from './core/components/header-checkbox/header-checkbox.component';
import { CheckboxFormatterComponent } from './core/components/checkbox-formatter/checkbox-formatter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ImageFormatterComponent,
    LinkFormatterComponent,
    StatusPanelFormatterComponent,
    HeaderCheckboxComponent,
    CheckboxFormatterComponent,
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([
      ImageFormatterComponent,
      LinkFormatterComponent,
      StatusPanelFormatterComponent,
      HeaderCheckboxComponent,
      CheckboxFormatterComponent,
    ]),
    HttpClientModule,
    StoreModule.forRoot({ gridDataReducer }),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
