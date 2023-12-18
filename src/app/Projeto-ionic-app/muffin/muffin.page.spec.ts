import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MuffinPage } from './muffin.page';

describe('MuffinPage', () => {
  let component: MuffinPage;
  let fixture: ComponentFixture<MuffinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MuffinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
