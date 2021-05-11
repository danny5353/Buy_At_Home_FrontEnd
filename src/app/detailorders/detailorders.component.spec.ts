import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailordersComponent } from './detailorders.component';

describe('DetailordersComponent', () => {
  let component: DetailordersComponent;
  let fixture: ComponentFixture<DetailordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailordersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
