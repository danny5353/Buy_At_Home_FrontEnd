import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuopcionesComponent } from './menuopciones.component';

describe('MenuopcionesComponent', () => {
  let component: MenuopcionesComponent;
  let fixture: ComponentFixture<MenuopcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuopcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuopcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
