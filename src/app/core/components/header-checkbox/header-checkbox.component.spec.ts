import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCheckboxComponent } from './header-checkbox.component';
import {GridApi} from "ag-grid-community";

describe('HeaderCheckboxComponent', () => {
  let component: HeaderCheckboxComponent;
  let fixture: ComponentFixture<HeaderCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCheckboxComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCheckboxComponent);
    component = fixture.componentInstance;
    component.agInit({api: new GridApi()})
    fixture.detectChanges();
  });


  afterEach(() => {
    fixture.detectChanges();
  })
});
