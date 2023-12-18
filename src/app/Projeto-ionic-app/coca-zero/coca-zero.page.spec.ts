import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CocaZeroPage } from './coca-zero.page';

describe('CocaZeroPage', () => {
  let component: CocaZeroPage;
  let fixture: ComponentFixture<CocaZeroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CocaZeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
