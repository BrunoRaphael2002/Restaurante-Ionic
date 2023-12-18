import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalmaoPage } from './salmao.page';

describe('SalmaoPage', () => {
  let component: SalmaoPage;
  let fixture: ComponentFixture<SalmaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SalmaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
