import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BackOfficeGeneralComponent} from './back-office-general.component';

describe('CompanyGeneralComponent', () => {
  let component: BackOfficeGeneralComponent;
  let fixture: ComponentFixture<BackOfficeGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackOfficeGeneralComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackOfficeGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
