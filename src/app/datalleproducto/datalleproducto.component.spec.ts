import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatalleproductoComponent } from './datalleproducto.component';

describe('DatalleproductoComponent', () => {
  let component: DatalleproductoComponent;
  let fixture: ComponentFixture<DatalleproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatalleproductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatalleproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
