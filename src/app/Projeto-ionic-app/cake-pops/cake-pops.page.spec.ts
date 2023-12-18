import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CakePopsPage } from './cake-pops.page';

describe('CakePopsPage', () => {
  let component: CakePopsPage;
  let fixture: ComponentFixture<CakePopsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CakePopsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
