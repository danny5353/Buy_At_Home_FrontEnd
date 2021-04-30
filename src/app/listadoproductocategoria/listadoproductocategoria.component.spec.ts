import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoproductocategoriaComponent } from './listadoproductocategoria.component';

describe('ListadoproductocategoriaComponent', () => {
  let component: ListadoproductocategoriaComponent;
  let fixture: ComponentFixture<ListadoproductocategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoproductocategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoproductocategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
