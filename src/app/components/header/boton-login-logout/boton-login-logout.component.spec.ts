import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonLoginLogoutComponent } from './boton-login-logout.component';

describe('BotonLoginLogoutComponent', () => {
  let component: BotonLoginLogoutComponent;
  let fixture: ComponentFixture<BotonLoginLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonLoginLogoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonLoginLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
