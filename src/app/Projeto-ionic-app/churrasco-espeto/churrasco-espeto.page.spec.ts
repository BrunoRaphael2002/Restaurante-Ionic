import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChurrascoEspetoPage } from './churrasco-espeto.page';

describe('ChurrascoEspetoPage', () => {
  let component: ChurrascoEspetoPage;
  let fixture: ComponentFixture<ChurrascoEspetoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChurrascoEspetoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
