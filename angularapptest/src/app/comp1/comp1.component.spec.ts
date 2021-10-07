import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1Component } from './comp1.component';

describe('Comp1Component', () => {
  let component: Comp1Component;
  let fixture: ComponentFixture<Comp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as name 'Shubham'`, () => {
    expect(component.name).toEqual('Shubham');
  });

  it('should render name', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Shubham');
  });

  // it('should render a button',()=>{
    
  // })

  // it('button should have text as click',() =>{
    
  // })
});
