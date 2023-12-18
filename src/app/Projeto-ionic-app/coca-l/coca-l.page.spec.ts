import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CocaLPage } from './coca-l.page';

describe('CocaLPage', () => {
  let component: CocaLPage;
  let fixture: ComponentFixture<CocaLPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CocaLPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
