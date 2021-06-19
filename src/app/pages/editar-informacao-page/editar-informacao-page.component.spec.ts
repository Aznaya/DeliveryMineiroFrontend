import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInformacaoPageComponent } from './editar-informacao-page.component';

describe('EditarInformacaoPageComponent', () => {
  let component: EditarInformacaoPageComponent;
  let fixture: ComponentFixture<EditarInformacaoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarInformacaoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarInformacaoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
