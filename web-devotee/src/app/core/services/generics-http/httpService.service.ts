import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Resource } from 'src/app/shared/model/serializer/resource.model';
import { Serializer } from 'src/app/shared/model/serializer/serializer.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService <T extends Resource> {
  options = {}
  constructor(
    private httpClient: HttpClient,
    private url: string,
    private serializer: Serializer,

  ) {
    this.options = {
      responseType: 'json',
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      })
  }
  }
  get(): Observable<T> {
    return this.httpClient
      .get(`${this.url}`, this.options)
      .pipe(map((data: any) => this.serializer.fromJson(data) as T));
  }
  post(item: T): Observable<T> {
    return this.httpClient
      .post(`${this.url}`,this.serializer.fromJson(item), this.options )
      .pipe(map((data: any) => this.serializer.fromJson(data) as T));
  }
}
