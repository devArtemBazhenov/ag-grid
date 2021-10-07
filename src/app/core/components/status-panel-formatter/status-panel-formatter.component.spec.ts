import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusPanelFormatterComponent } from './status-panel-formatter.component';
import { provideMockStore } from '@ngrx/store/testing';
import {ColumnApi, GridApi} from "ag-grid-community";

describe('StatusPanelFormatterComponent', () => {
  let component: StatusPanelFormatterComponent;
  let fixture: ComponentFixture<StatusPanelFormatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusPanelFormatterComponent ],
      providers: [ provideMockStore({ }) ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusPanelFormatterComponent);
    component = fixture.componentInstance;
    component.agInit({api: new GridApi()., columnApi: new ColumnApi(), context: ''})
    fixture.detectChanges();
  });

  it('Created', () => {
    fixture.detectChanges();
    expect(component.params).toBeTruthy();
  })

  afterEach(() => {
    fixture.destroy()
  })

});
