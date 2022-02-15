import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VacancyNewComponent} from './vacancy-new.component';

describe('VacancyNewComponent', () => {
  let component: VacancyNewComponent;
  let fixture: ComponentFixture<VacancyNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VacancyNewComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
