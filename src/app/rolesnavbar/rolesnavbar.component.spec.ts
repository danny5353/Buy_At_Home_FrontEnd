import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesnavbarComponent } from './rolesnavbar.component';

describe('RolesnavbarComponent', () => {
  let component: RolesnavbarComponent;
  let fixture: ComponentFixture<RolesnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesnavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
