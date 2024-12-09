import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseModifyComponent } from './license-modify.component';

describe('LicenseModifyComponent', () => {
  let component: LicenseModifyComponent;
  let fixture: ComponentFixture<LicenseModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseModifyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
