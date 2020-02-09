import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalTrainingComponent } from './additional-training.component';

describe('AdditionalTrainingComponent', () => {
  let component: AdditionalTrainingComponent;
  let fixture: ComponentFixture<AdditionalTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
