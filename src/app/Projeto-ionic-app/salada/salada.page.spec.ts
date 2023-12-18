import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaladaPage } from './salada.page';

describe('SaladaPage', () => {
  let component: SaladaPage;
  let fixture: ComponentFixture<SaladaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SaladaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
