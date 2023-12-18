import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuaranaLataPage } from './guarana-lata.page';

describe('GuaranaLataPage', () => {
  let component: GuaranaLataPage;
  let fixture: ComponentFixture<GuaranaLataPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GuaranaLataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
