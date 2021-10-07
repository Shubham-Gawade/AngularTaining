import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Child1Component } from '../child1/child1.component';

import { Parent1Component } from './parent1.component';

describe('Parent1Component', () => {
  let component: Parent1Component;
  let fixture: ComponentFixture<Parent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Parent1Component, Child1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Parent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check io value', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.directive(Child1Component)).nativeElement.innerText).toBe('Message received from parent : This msg send to child')
  })

});
