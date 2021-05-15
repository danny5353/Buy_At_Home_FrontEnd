import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioclienteComponent } from './iniciocliente.component';

describe('InicioclienteComponent', () => {
  let component: InicioclienteComponent;
  let fixture: ComponentFixture<InicioclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
