import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';

import { ApiResource } from './models/api-resource.model';
import { ApiResourceList } from './models/api-resource-list.model';

export class ServiceBaseClass {
    
  protected url: string = 'https://pokeapi.co/api/v2';

  constructor(protected httpClient: HttpClient) {}
  
  protected getApiResourceList<T>(listUrl: string, limit: number): Observable<Array<T>> {
    return this.httpClient
      .get<ApiResourceList>(`${listUrl}?limit=${limit}`)
      .pipe(
        pluck('results'),
        switchMap((results: Array<ApiResource>) => this.getApiResourceListItems<T>(results))
      );
  }
  
  protected getApiResourceListItems<T>(results: Array<ApiResource>): Observable<Array<T>> {
    return forkJoin(results.map((resource: ApiResource) => this.httpClient
      .get<T>(resource.url)));
  }
}