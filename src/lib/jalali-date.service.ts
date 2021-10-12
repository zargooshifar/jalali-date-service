import {TranslationWidth} from "@angular/common";
import {Injectable} from "@angular/core";
import * as fns from 'date-fns-jalali';
import {newDate} from "date-fns-jalali";

export const enum DayPeriod {
  AM = 'ق.ظ',
  PM = 'ب.ظ',
}

@Injectable()
export class JalaliDateService {
  readonly DAYS_IN_WEEK: number = 7;
  readonly HOURS_IN_DAY_PERIOD = 12;

  protected localeData: {
    firstDayOfWeek: number,
    defaultFormat: string,
    months: { [key: string]: string[] },
    days: { [key: string]: string[] },
  } ;

  constructor() {
    this.localeData = {
      firstDayOfWeek: 6,
      defaultFormat: 'yyyy-MM-dd',
      months: {
        [TranslationWidth.Abbreviated]: [
          'فر',
          'ار',
          'خر',
          'تی',
          'مر',
          'شه',
          'مه',
          'آب',
          'آذ',
          'دی',
          'به',
          'اس',
        ],
        [TranslationWidth.Wide]: [
          'فروردین',
          'اردیبهشت',
          'خرداد',
          'تیر',
          'مرداد',
          'شهریور',
          'مهر',
          'آبان',
          'آذر',
          'دی',
          'بهمن',
          'اسفند',
        ],
      },
      days: {
        [TranslationWidth.Wide]: [
          'یک‌شنبه',
          'دوشنبه',
          'سه‌شنبه',
          'چهارشنبه',
          'پنج‌شنبه',
          'جمعه',
          'شنبه',
        ],
        [TranslationWidth.Short]: ['1ش', '2ش', '3ش', '4ش', '5ش', 'ج', 'ش'],
        [TranslationWidth.Narrow]: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
      },
    };
  }

  valueOf(date: Date): number {
    return date.getTime();
  }



  addDay(date: Date, days: number): Date {
    return fns.addDays(date, days);
  }

  addHours(date: Date, hour: number): Date {
    return fns.addHours(date, hour);
  }

  addMinutes(date: Date, minute: number): Date {
    return fns.addMinutes(date, minute);
  }

  addMonth(date: Date, months: number): Date {
    return fns.addMonths(date, months);
  }

  addYear(date: Date, years: number): Date {
    return fns.addYears(date, years);
  }

  clone(date: Date): Date {
    return new Date(date);
  }

  compareDates(date1: Date, date2: Date): number {
    return fns.compareAsc(date1, date2);
  }

  createDate(year: number, month: number, date: number): Date {
    return newDate(year, month, date);
  }

  format(date: Date, format: string): string {
    if (date)
      return fns.format(date, format);
    else return "";
  }

  getDate(date: Date): number {
    return fns.getDate(date);
  }

  getDateFormat(): string {
    return this.localeData.defaultFormat;
  }

  getDayOfWeek(date: Date): number {
    return fns.getDay(date);
  }

  getDayOfWeekNames(style: TranslationWidth = TranslationWidth.Narrow): string[] {
    return this.localeData.days[style];
  }

  getFirstDayOfWeek(): number {
    return this.localeData.firstDayOfWeek;
  }

  getHours(date: Date): number {
    return date.getHours();
  }

  getId(): string {
    return "acob_jalali_converter";
  }

  getLocaleTimeFormat(): string {
    return "HH:mm";
  }

  getMilliseconds(date: Date): number {
    return date.getMilliseconds();
  }

  getMinutes(date: Date): number {
    return date.getMinutes();
  }

  getMonth(date: Date): number {
    return fns.getMonth(date);
  }

  getMonthEnd(date: Date): Date {
    return newDate(fns.getYear(date), fns.getMonth(date), fns.getDaysInMonth(date));
  }

  getMonthName(date: Date, style: TranslationWidth = TranslationWidth.Wide): string {
    return this.localeData.months[style][fns.getMonth(date)];
  }

  getMonthNameByIndex(month: number, style: TranslationWidth = TranslationWidth.Wide): string {
    return this.localeData.months[style][month];
  }

  getMonthStart(date: Date): Date {
    return fns.newDate(fns.getYear(date), fns.getMonth(date), 1);
  }

  getNumberOfDaysInMonth(date: Date): number {
    return fns.getDaysInMonth(date);
  }

  getSeconds(date: Date): number {
    return date.getSeconds();
  }

  getTwelveHoursFormat(): string {
    return 'hh:mm A';
  }

  getWeekNumber(date: Date): number {
    return fns.getWeek(date);
  }

  getYear(date: Date): number {
    return fns.getYear(date);
  }

  getYearEnd(date: Date): Date {
    const last_month = fns.newDate(fns.getYear(date), 12, 1);
    const daysInLastMonth = fns.getDaysInMonth(last_month);
    return fns.newDate(fns.getYear(date), 12, daysInLastMonth);
  }

  getYearStart(date: Date): Date {
    return newDate(fns.getYear(date), 1, 1);
  }

  isSameDay(date1: Date, date2: Date): boolean {
    return fns.compareAsc(date1, date2) === 0;
  }

  isSameMonth(date1: Date, date2: Date): boolean {
    return fns.getMonth(date1) === fns.getMonth(date2);
  }

  isSameYear(date1: Date, date2: Date): boolean {
    return fns.getYear(date1) === fns.getYear(date2);
  }

  isValidDateString(date: string, format: string): boolean {
    return fns.isValid(new Date(date));
  }

  isValidTimeString(date: string, format: string): boolean {
    return fns.isValid(new Date(date));
  }

  parse(date: string, format: string): Date {
    try {
      return fns.parse(date, format, new Date());
    } catch {
      return new Date();
    }
  }

  setHours(date: Date, hour: number): Date {
    date.setHours(hour);
    return date;
  }

  setMilliseconds(date: Date, second: number): Date {
    date.setMilliseconds(second);
    return date;
  }

  setMinutes(date: Date, minute: number): Date {
    date.setMinutes(minute);
    return date;
  }

  setSeconds(date: Date, second: number): Date {
    date.setSeconds(second);
    return date;
  }

  today(): Date {
    return new Date();
  }


  isSameHourAndMinute(date1: Date, date2: Date): boolean {
    return this.isSameHour(date1, date2) && this.isSameMinute(date1, date2);
  }

  isSameHour(date1: Date, date2: Date): boolean {
    return this.getHours(date1) === this.getHours(date2);
  }

  isSameMinute(date1: Date, date2: Date): boolean {
    return this.getMinutes(date1) === this.getMinutes(date2);
  }

  getTwentyFourHoursFormat(): string {
    return 'HH:mm';
  }

  getTwentyFourHoursFormatWithSeconds(): string {
    return 'HH:mm:ss';
  }

  getTwelveHoursFormatWithSeconds(): string {
    return 'hh:mm:ss a';
  }

  getDayPeriod(date: Date): DayPeriod {
    const isFirstDayPeriod = this.getHours(date) < this.HOURS_IN_DAY_PERIOD;
    if (isFirstDayPeriod) {
      return DayPeriod.AM;
    } else {
      return DayPeriod.PM;
    }
  }

  isBetween(date: Date, start: Date, end: Date): boolean {
    return this.compareDates(date, start) > 0 && this.compareDates(date, end) < 0;
  }

  isSameDaySafe(date1: Date, date2: Date): boolean {
    return date1 && date2 && this.isSameDay(date1, date2);
  }

  isSameMonthSafe(date1: Date, date2: Date): boolean {
    return date1 && date2 && this.isSameMonth(date1, date2);
  }

  isSameYearSafe(date1: Date, date2: Date): boolean {
    return date1 && date2 && this.isSameYear(date1, date2);
  }

}
