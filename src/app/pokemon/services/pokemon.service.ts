import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { ServiceBaseClass } from '../../common/service-base.class';
import { Pokemon } from '../models/pokemon.model';

@Injectable()
export class PokemonService extends ServiceBaseClass {

  get pokemon(): Observable<Array<Pokemon>> {
    if(!this.cache) {
      this.cache = this.getPokemon()
        .pipe(shareReplay(this.cacheSize));
    }

    return this.cache;
  }

  private cacheSize: number = 1;

  private cache: Observable<Array<Pokemon>>;

  private endpoint: string = 'pokemon';

  private limit: number = 1000;

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  private getPokemon(): Observable<Array<Pokemon>> {
    return this.getApiResourceList<Pokemon>(`${this.url}/${this.endpoint}`, this.limit);
  }

}
