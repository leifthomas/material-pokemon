import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import {
  map,
  shareReplay,
  switchMap
} from 'rxjs/operators';

import { NamedApiResourceService } from '../../common/services/named-api-resource.service';
import { ServiceBaseClass } from '../../common/service-base.class';
import { Pokemon } from '../models/pokemon.model';
import { PokemonSpecies } from '../models/pokemon-species.model';
import { PokemonSpeciesVariety } from '../models/pokemon-species-variety.model';

@Injectable()
export class PokemonSpeciesService extends ServiceBaseClass {

  get pokemonSpecies(): Observable<Array<PokemonSpecies>> {
    if(!this.cache) {
      this.cache = this.getPokemonSpecies()
        .pipe(shareReplay(this.cacheSize));
    }

    return this.cache;
  }

  private cacheSize: number = 1;

  private cache: Observable<Array<PokemonSpecies>>;

  private endpoint: string = 'pokemon-species';

  private limit: number = 1000;

  constructor(protected httpClient: HttpClient, private namedApiResourceService: NamedApiResourceService) {
    super(httpClient);
  }

  private getPokemonSpecies(): Observable<Array<PokemonSpecies>> {
    return this.getApiResourceList<PokemonSpecies>(`${this.url}/${this.endpoint}`, this.limit)
      .pipe(
        map((pokemonSpeciesList: Array<PokemonSpecies>) => pokemonSpeciesList.map((pokemon: PokemonSpecies) => new PokemonSpecies(pokemon))),
        switchMap((speciesList: Array<PokemonSpecies>) => {
          return forkJoin(speciesList.map((species: PokemonSpecies) => {
            let defaultVariety: PokemonSpeciesVariety = species.varieties
              .find((variety: PokemonSpeciesVariety) => variety.is_default);

            return this.namedApiResourceService
              .getNamedApiResource<Pokemon>(defaultVariety.pokemon)
              .pipe(
                map((defaultPokemonRaw: Pokemon) => {
                  const defaultPokemon: Pokemon = new Pokemon(defaultPokemonRaw);
                  
                  return Object.assign(new PokemonSpecies(species), { defaultPokemon });
                })
              );
          }));
        })
      );
  }

}
