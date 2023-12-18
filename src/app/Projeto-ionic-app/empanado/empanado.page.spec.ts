import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmpanadoPage } from './empanado.page';

describe('EmpanadoPage', () => {
  let component: EmpanadoPage;
  let fixture: ComponentFixture<EmpanadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EmpanadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
