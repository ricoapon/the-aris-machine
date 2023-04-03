import {CookieService} from "ngx-cookie-service";
import {Injectable} from "@angular/core";

/**
 * Wrapper around existing CookieService to have all code for setting and reading cookies in one place.
 */
@Injectable({providedIn: 'root'})
export class MyCookieService {
  readonly SPEED_UP_FACTOR = 'speedUpFactor'
  readonly SPEED_UP_FACTOR_DEFAULT = 1

  constructor(private cookieService: CookieService) {
  }

  getSpeedUpFactor(): number {
    if (!this.cookieService.check(this.SPEED_UP_FACTOR)) {
      return this.SPEED_UP_FACTOR_DEFAULT
    }
    return Number(this.cookieService.get(this.SPEED_UP_FACTOR))
  }

  setSpeedUpFactor(value: number) {
    this.cookieService.set(this.SPEED_UP_FACTOR, String(value), 365)
  }
}
