import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiNavComponent } from './kpi-nav.component';

describe('KpiNavComponent', () => {
  let component: KpiNavComponent;
  let fixture: ComponentFixture<KpiNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
