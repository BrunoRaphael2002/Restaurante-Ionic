import { ComponentFixture, TestBed } from '@angular/core/testing';
import { XBurggerPage } from './x-burgger.page';

describe('XBurggerPage', () => {
  let component: XBurggerPage;
  let fixture: ComponentFixture<XBurggerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(XBurggerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
