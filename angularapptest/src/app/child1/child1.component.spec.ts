import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1Component } from './child1.component';

describe('Child1Component', () => {
  let component: Child1Component;
  let fixture: ComponentFixture<Child1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as name 'msgRecived'`, () => {
    expect(component.msgRecived).toEqual('');
  });

  // it('should render message', () => {
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h2')?.innerHTML).toContain('Message received from parent : This msg send to child');
  // });
});
