import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpectraChartComponent } from './spectra-chart.component';

describe('SpectraChartComponent', () => {
  let component: SpectraChartComponent;
  let fixture: ComponentFixture<SpectraChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpectraChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpectraChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
