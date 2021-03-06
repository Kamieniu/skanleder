import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCarPageComponent } from './selected-car-page.component';

describe('SelectedCarPageComponent', () => {
  let component: SelectedCarPageComponent;
  let fixture: ComponentFixture<SelectedCarPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedCarPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedCarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
