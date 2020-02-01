import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { NamedApiResource } from '../models/named-api-resource.model';

@Injectable({
  providedIn: 'root'
})
export class NamedApiResourceService {

  constructor(private httpClient: HttpClient) { }

  getNamedApiResource<T>(namedApiResource: NamedApiResource<T>): Observable<T> {
    return this.httpClient.get<T>(namedApiResource.url);
  }

}
