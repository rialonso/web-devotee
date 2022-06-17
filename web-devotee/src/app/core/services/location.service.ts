import { Injectable } from '@angular/core';
import { MLocation } from 'src/app/shared/model/location/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }
  getCurrentLocation(): Promise<MLocation> {
    return new Promise<MLocation>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(currentPosition => {
        resolve(new MLocation(
          currentPosition.coords.latitude,
          currentPosition.coords.longitude,
          true
        ));
      }, err => {
        reject(err);
      });
    })
  }
}
