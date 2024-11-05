import "dayjs/locale/pt-br";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.locale("pt-br");

export type UnitTypeLong =
  | "millisecond"
  | "second"
  | "minute"
  | "hour"
  | "day"
  | "month"
  | "year"
  | "date";

type TDateUtilsOptions = {
  date?: string | Date;
  utc: boolean;
};

export class DateUtils {
  private date: dayjs.Dayjs;
  private options: TDateUtilsOptions;

  constructor(options: TDateUtilsOptions = { utc: false }) {
    this.options = options;
    if (options.date) {
      this.date = options.utc ? dayjs.utc(options.date) : dayjs(options.date);
    } else {
      this.date = options.utc ? dayjs.utc() : dayjs();
    }
  }

  startOf(unit: UnitTypeLong): DateUtils {
    if (this.options.utc) {
      this.date = dayjs.utc(this.date).startOf(unit);
    } else {
      this.date = dayjs(this.date).startOf(unit);
    }
    return this;
  }

  endOf(unit: UnitTypeLong): DateUtils {
    if (this.options.utc) {
      this.date = dayjs.utc(this.date).endOf(unit);
    } else {
      this.date = dayjs(this.date).endOf(unit);
    }
    return this;
  }

  format(format: string): string {
    if (this.options.utc) {
      return dayjs.utc(this.date).format(format);
    }
    return this.date.format(format);
  }

  set(unit: UnitTypeLong, value: number): DateUtils {
    if (this.options.utc) {
      this.date = dayjs.utc(this.date).set(unit, value);
    } else {
      this.date = dayjs(this.date).set(unit, value);
    }
    return this;
  }

  get(unit: UnitTypeLong): number {
    if (this.options.utc) {
      return dayjs.utc(this.date).get(unit);
    }
    return this.date.get(unit);
  }

  subtract(unit: UnitTypeLong, value: number): DateUtils {
    if (this.options.utc) {
      this.date = dayjs
        .utc(this.date)
        .subtract(value, unit as dayjs.ManipulateType);
    } else {
      this.date = dayjs(this.date).subtract(
        value,
        unit as dayjs.ManipulateType,
      );
    }
    return this;
  }

  add(unit: UnitTypeLong, value: number): DateUtils {
    if (this.options.utc) {
      this.date = dayjs.utc(this.date).add(value, unit as dayjs.ManipulateType);
    } else {
      this.date = dayjs(this.date).add(value, unit as dayjs.ManipulateType);
    }
    return this;
  }

  clone(): DateUtils {
    return new DateUtils({
      date: this.date.toISOString(),
      utc: this.options.utc,
    });
  }

  getDate(): Date {
    return this.date.toDate();
  }
}
