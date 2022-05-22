import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Resource } from 'src/app/shared/model/serializer/resource.model';
import { Serializer } from 'src/app/shared/model/serializer/serializer.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService <T extends Resource> {
  options = {}
  constructor(
    private httpClient: HttpClient,
    private api: string,
    private url: string,
    private serializer: Serializer,

  ) {
    this.options = {
      responseType: 'json',
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage?.getItem('access_token') || ''}`,
      })
  }
  }
  get(id?: any): Observable<T> {
    return this.httpClient
      .get(this.returnUrl(id), this.options)
      .pipe(
        map((data: any) => this.serializer.toJson(data) as T),

        );
  }
  post(item?: T, id?: any): Observable<T> {
    return this.httpClient
      .post(this.returnUrl(id),this.serializer.fromJson(item), this.options )
      .pipe(map((data: any) => this.serializer.toJson(data) as T));
  }
  private returnUrl(id?: any) {
    const apiURL = `${this.api}${this.url}`;
    if (id) {
      return `${apiURL}/${id}`;
    }
    return apiURL;
  }
}
