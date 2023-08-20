import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class APIService {
  constructor(private httpClient: HttpClient) {}
  getAllStates(): Observable<any> {
    return this.httpClient.get(
      'https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json'
    );
  }
}
