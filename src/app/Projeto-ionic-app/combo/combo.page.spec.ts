import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComboPage } from './combo.page';

describe('ComboPage', () => {
  let component: ComboPage;
  let fixture: ComponentFixture<ComboPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ComboPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
