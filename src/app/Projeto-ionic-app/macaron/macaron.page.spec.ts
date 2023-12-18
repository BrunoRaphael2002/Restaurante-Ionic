import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MacaronPage } from './macaron.page';

describe('MacaronPage', () => {
  let component: MacaronPage;
  let fixture: ComponentFixture<MacaronPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MacaronPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
