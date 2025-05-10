import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordActivateComponent } from './forgot-password-activate.component';

describe('ForgotPasswordActivateComponent', () => {
  let component: ForgotPasswordActivateComponent;
  let fixture: ComponentFixture<ForgotPasswordActivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotPasswordActivateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordActivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
