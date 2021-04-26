import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarprodcutosComponent } from './agregarprodcutos.component';

describe('AgregarprodcutosComponent', () => {
  let component: AgregarprodcutosComponent;
  let fixture: ComponentFixture<AgregarprodcutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarprodcutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarprodcutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
