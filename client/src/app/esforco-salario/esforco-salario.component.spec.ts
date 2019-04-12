import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsforcoSalarioComponent } from './esforco-salario.component';

describe('EsforcoSalarioComponent', () => {
  let component: EsforcoSalarioComponent;
  let fixture: ComponentFixture<EsforcoSalarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsforcoSalarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsforcoSalarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
