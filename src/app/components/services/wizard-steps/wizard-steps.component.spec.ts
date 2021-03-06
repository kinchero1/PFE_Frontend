import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardStepsComponent } from './wizard-steps.component';

describe('WizardStepsComponent', () => {
  let component: WizardStepsComponent;
  let fixture: ComponentFixture<WizardStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardStepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
