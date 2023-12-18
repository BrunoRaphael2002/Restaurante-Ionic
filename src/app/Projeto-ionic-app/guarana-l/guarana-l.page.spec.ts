import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuaranaLPage } from './guarana-l.page';

describe('GuaranaLPage', () => {
  let component: GuaranaLPage;
  let fixture: ComponentFixture<GuaranaLPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GuaranaLPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
