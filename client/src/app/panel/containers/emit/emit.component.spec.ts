import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitComponent } from './emit.component';

describe('EmitComponent', () => {
  let component: EmitComponent;
  let fixture: ComponentFixture<EmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
