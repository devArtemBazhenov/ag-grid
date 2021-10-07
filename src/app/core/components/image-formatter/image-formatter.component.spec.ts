import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageFormatterComponent } from './image-formatter.component';

describe('ImageFormatterComponent', () => {
  let component: ImageFormatterComponent;
  let fixture: ComponentFixture<ImageFormatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageFormatterComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageFormatterComponent);
    component = fixture.componentInstance;
    component.agInit({ value: 'testValue' });
    fixture.detectChanges();
  });

  it('Should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('Params should be', () => {
    fixture.detectChanges()
    expect(component.params).toEqual({ value: 'testValue' })
  })
});
