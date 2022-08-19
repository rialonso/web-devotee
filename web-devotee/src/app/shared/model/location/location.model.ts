export class MLocation {
  lat: number;
  lng: number;
  automatic_location: boolean;

  constructor(
    lat: number,
    lng: number,
    automatic_location: boolean,
  ) {
    this.lat = lat;
    this.lng = lng;
    this.automatic_location = automatic_location;
  }
}
