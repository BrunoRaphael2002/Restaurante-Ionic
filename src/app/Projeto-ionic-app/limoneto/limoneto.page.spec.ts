import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LimonetoPage } from './limoneto.page';

describe('LimonetoPage', () => {
  let component: LimonetoPage;
  let fixture: ComponentFixture<LimonetoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LimonetoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
