import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmphttpcompComponent } from './emphttpcomp.component';

describe('EmphttpcompComponent', () => {
  let component: EmphttpcompComponent;
  let fixture: ComponentFixture<EmphttpcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmphttpcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmphttpcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
