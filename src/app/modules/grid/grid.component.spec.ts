import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import { GridComponent } from './grid.component';
import { HttpClientModule } from '@angular/common/http';
import { FetchDataService } from '../../core/services/fetch-data.service';
import { provideMockStore } from '@ngrx/store/testing';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridComponent],
      imports: [HttpClientModule],
      providers: [FetchDataService, provideMockStore({initialState})]
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(GridComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('', () => {
      expect(component).toBeTruthy();
    })

  });
})
