import { TestBed } from '@angular/core/testing';

import { CurriculoResolver } from './curriculo.resolver';

describe('CurriculoResolver', () => {
  let resolver: CurriculoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CurriculoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
