import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlmondegaPage } from './almondega.page';

describe('AlmondegaPage', () => {
  let component: AlmondegaPage;
  let fixture: ComponentFixture<AlmondegaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlmondegaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
