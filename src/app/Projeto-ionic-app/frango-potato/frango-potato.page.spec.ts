import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrangoPotatoPage } from './frango-potato.page';

describe('FrangoPotatoPage', () => {
  let component: FrangoPotatoPage;
  let fixture: ComponentFixture<FrangoPotatoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FrangoPotatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
