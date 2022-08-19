import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransformAgeService {

  constructor() { }

  transformAge(birthdateData) {
    const birthdate = birthdateData.replace(/-/g, '')
    const year = Number(birthdate.substr(0, 4));
    const today = new Date();
    const month = Number(birthdate.substr(4, 2)) - 1;
    const day = Number(birthdate.substr(6, 2));
    let age = today.getFullYear() - year;
    if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
      age--;
    }
    return age;
  }
}
