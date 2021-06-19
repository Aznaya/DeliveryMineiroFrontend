import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPedidosPageComponent } from './lista-pedidos-page.component';

describe('ListaPedidosPageComponent', () => {
  let component: ListaPedidosPageComponent;
  let fixture: ComponentFixture<ListaPedidosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPedidosPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPedidosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
