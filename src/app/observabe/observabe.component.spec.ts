import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservabeComponent } from './observabe.component';

describe('ObservabeComponent', () => {
  let component: ObservabeComponent;
  let fixture: ComponentFixture<ObservabeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservabeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
