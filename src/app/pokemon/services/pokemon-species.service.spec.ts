import { TestBed } from '@angular/core/testing';

import { PokemonSpeciesService } from './pokemon-species.service';

describe('PokemonSpeciesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonSpeciesService = TestBed.get(PokemonSpeciesService);
    expect(service).toBeTruthy();
  });
});
