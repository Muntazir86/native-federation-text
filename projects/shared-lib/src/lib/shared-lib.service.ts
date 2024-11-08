import { Injectable } from '@angular/core';
import { getTimezoneOffset } from 'date-fns-tz';

@Injectable({
  providedIn: 'root'
})
export class SharedLibService {

  name = 'foo'
  constructor() { }


  getUTCOffset(timezone: string): string {
    const date = new Date();
    const offset = getTimezoneOffset(timezone, date);
    const totalMinutes = Math.floor(offset / 60000);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.abs(totalMinutes % 60);
    return `(UTC${hours < 0 ? '-' : '+'}${Math.abs(hours).toString().padStart(2, '0')}:${minutes < 10 ? '0' : ''}${minutes})`;
  }
}
