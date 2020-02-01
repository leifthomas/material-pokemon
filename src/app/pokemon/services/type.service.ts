import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { ServiceBaseClass } from '../../common/service-base.class';
import { Type } from '../models/type.model';

@Injectable()
export class TypeService extends ServiceBaseClass {

  get types(): Observable<Array<Type>> {
    if(!this.cache) {
      this.cache = this.getTypes()
        .pipe(shareReplay(this.cacheSize));
    }

    return this.cache;
  }

  private cacheSize: number = 1;

  private cache: Observable<Array<Type>>;

  private endpoint: string = 'type'

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  private getTypes(): Observable<Array<Type>> {
    return this.getApiResourceList<Type>(`https://pokeapi.co/api/v2/${this.endpoint}`, 50);
  }

}
