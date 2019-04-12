import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecoMulheresComponent } from './preco-mulheres.component';

describe('PrecoMulheresComponent', () => {
  let component: PrecoMulheresComponent;
  let fixture: ComponentFixture<PrecoMulheresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecoMulheresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecoMulheresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
