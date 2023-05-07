import { Injectable } from '@angular/core';
import { TranslateService } from 'src/app/core/services/translate/translate.service';

@Injectable({
  providedIn: 'root'
})
export class CalculateHoursAgoService {
  dataTexts

  constructor(
    private translateService: TranslateService,

  ) {
    this.dataTexts = this.translateService?.textTranslate;

   }
  calculateHoursAgo(updateAt: string) {
    const dateLiked: any = new Date(updateAt);
    const nowDate: any = new Date();
    const diffInMs = dateLiked - nowDate;
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    const diffInHours = diffInMs / (1000 * 60 * 60);
    const diffInMinutes = diffInMs / (1000 * 60);

    if (dateLiked.getDate() === nowDate.getDate()) {
      if (Math.abs(diffInHours) < 1) {
        if (Math.abs(diffInMinutes) == 1 ) {
          return `
          ${Math.abs(Math.floor(diffInMinutes))}
          ${this.dataTexts.minute} ${this.dataTexts.ago}`

        }
        return `
          ${Math.abs(Math.floor(diffInMinutes))}
          ${this.dataTexts.minutes} ${this.dataTexts.ago}`
      }
      if (Math.abs(diffInHours) == 1) {
        return `
          ${Math.abs(Math.floor(diffInHours))}
          ${this.dataTexts.hour} ${this.dataTexts.ago}`
      }
      return `
        ${Math.abs(Math.floor(diffInHours))}
        ${this.dataTexts.hours} ${this.dataTexts.ago}`
    } else {
      if (Math.abs(diffInDays) == 1) {
        return `
        ${Math.abs(Math.floor(diffInDays))}
        ${this.dataTexts.day} ${this.dataTexts.ago}`
      }
      return `
      ${Math.abs(Math.floor(diffInDays))}
      ${this.dataTexts.days} ${this.dataTexts.ago}`
    }
  }
}
