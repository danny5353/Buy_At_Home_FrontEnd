import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerPrductoComponent } from './obtener-prducto.component';

describe('ObtenerPrductoComponent', () => {
  let component: ObtenerPrductoComponent;
  let fixture: ComponentFixture<ObtenerPrductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObtenerPrductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtenerPrductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
