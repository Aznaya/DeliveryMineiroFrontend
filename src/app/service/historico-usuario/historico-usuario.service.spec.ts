import { TestBed } from '@angular/core/testing';

import { HistoricoUsuarioService } from './historico-usuario.service';

describe('HistoricoUsuarioService', () => {
  let service: HistoricoUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricoUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
