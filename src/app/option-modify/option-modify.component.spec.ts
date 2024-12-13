import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionModifyComponent } from './option-modify.component';

describe('OptionModifyComponent', () => {
  let component: OptionModifyComponent;
  let fixture: ComponentFixture<OptionModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionModifyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
