import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MorangoPage } from './morango.page';

describe('MorangoPage', () => {
  let component: MorangoPage;
  let fixture: ComponentFixture<MorangoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MorangoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
