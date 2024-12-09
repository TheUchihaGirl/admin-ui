import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsViewerComponent } from './options-viewer.component';

describe('OptionsViewerComponent', () => {
  let component: OptionsViewerComponent;
  let fixture: ComponentFixture<OptionsViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
