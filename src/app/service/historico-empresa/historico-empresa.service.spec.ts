import { TestBed } from '@angular/core/testing';

import { HistoricoEmpresaService } from './historico-empresa.service';

describe('HistoricoEmpresaService', () => {
  let service: HistoricoEmpresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricoEmpresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
