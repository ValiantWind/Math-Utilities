import { BaseMath } from "./Base";

export type FormattedDuration = string;
export type ISO = string;

export class Dates extends BaseMath {
  static formatMS(milliseconds: number): FormattedDuration {
      this.validateNumber(milliseconds);
      if (milliseconds < 0) milliseconds = -milliseconds;
      
      const times = {
          day: Math.floor(milliseconds / 86400000),
          hour: Math.floor(milliseconds / 3600000) % 24,
          minute: Math.floor(milliseconds / 60000) % 60,
          second: Math.floor(milliseconds / 1000) % 60,
          millisecond: Math.floor(milliseconds) % 1000,
      };
      
      return Object.entries(times)
          .filter(([, val]) => val !== 0)
          .map(([key, val]) => `${val} ${key}${val !== 1 ? "s" : ""}`)
          .join(", ");
  }

  static secondsToISO(seconds: number): ISO {
      this.validateNumber(seconds);
      const [hour, minute, second, sign] =
          seconds > 0
              ? [seconds / 3600, (seconds / 60) % 60, seconds % 60, ""]
              : [-seconds / 3600, (-seconds / 60) % 60, -seconds % 60, "-"];

      return (
          sign +
          [hour, minute, second]
              .map((value) => `${Math.floor(value)}`.padStart(2, "0"))
              .join(":")
      );
  }
}