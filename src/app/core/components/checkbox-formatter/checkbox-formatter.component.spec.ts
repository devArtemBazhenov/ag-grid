import {ComponentFixture, fakeAsync, TestBed, waitForAsync} from '@angular/core/testing';

import { CheckboxFormatterComponent } from './checkbox-formatter.component';
import { AgGridModule } from 'ag-grid-angular';
import {FormsModule} from "@angular/forms";
import {GridApi} from "ag-grid-community";
import {GridComponent} from "../../../modules/grid/grid.component";
import {HttpClientModule} from "@angular/common/http";
import {provideMockStore} from "@ngrx/store/testing";

describe('CheckboxFormatterComponent', () => {
  let component: CheckboxFormatterComponent;
  let fixture: ComponentFixture<CheckboxFormatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgGridModule.withComponents([]), FormsModule, HttpClientModule],
      providers: [provideMockStore({  })],
      declarations: [ CheckboxFormatterComponent ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CheckboxFormatterComponent);
    component = fixture.componentInstance;
    component.agInit({
      context: TestBed.createComponent(GridComponent).componentInstance,
      data: {
        otherdata: "tomock"
      },
      node: {
        data: "moreDataToMock"
      }
    });
    console.log(component.params)
    fixture.detectChanges();

  });

  afterEach(async () => {
    fixture.destroy();
  });
});
