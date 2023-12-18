import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoloPage } from './bolo.page';

describe('BoloPage', () => {
  let component: BoloPage;
  let fixture: ComponentFixture<BoloPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BoloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
