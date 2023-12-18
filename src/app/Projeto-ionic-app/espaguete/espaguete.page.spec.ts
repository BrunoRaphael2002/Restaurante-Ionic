import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EspaguetePage } from './espaguete.page';

describe('EspaguetePage', () => {
  let component: EspaguetePage;
  let fixture: ComponentFixture<EspaguetePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EspaguetePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
