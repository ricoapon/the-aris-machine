import {CookieService} from "ngx-cookie-service";
import {Injectable} from "@angular/core";

export type CookieStorage = {
  speedUpFactor: number,
  completedLevels: number[]
  completedCodeChallengeLevels: number[]
  leftContainerWidthInPixels: number | undefined
}

/**
 * Wrapper around existing CookieService to have all code for setting and reading cookies in one place.
 */
@Injectable({providedIn: 'root'})
export class MyCookieService {
  readonly EXPIRES_IN_DAYS = 365
  readonly COOKIE_NAME = 'aris-machine-cookie'
  private readonly storage: CookieStorage

  constructor(private cookieService: CookieService) {
    if (this.cookieService.check(this.COOKIE_NAME)) {
      this.storage = JSON.parse(this.cookieService.get(this.COOKIE_NAME))
    } else {
      this.storage = {
        speedUpFactor: 1,
        completedLevels: [],
        completedCodeChallengeLevels: [],
        leftContainerWidthInPixels: undefined
      }
    }
  }

  private save() {
    this.cookieService.set(this.COOKIE_NAME, JSON.stringify(this.storage), this.EXPIRES_IN_DAYS)
  }

  getSpeedUpFactor(): number {
    return this.storage.speedUpFactor
  }

  setSpeedUpFactor(value: number) {
    this.storage.speedUpFactor = value
    this.save()
  }

  hasCompletedLevel(levelId: number): boolean {
    return this.storage.completedLevels.indexOf(levelId) > -1
  }

  setCompletedLevel(levelId: number) {
    if (!this.hasCompletedLevel(levelId)) {
      this.storage.completedLevels.push(levelId)
      this.save()
    }
  }

  hasCompletedCodeChallenge(levelId: number): boolean {
    return this.storage.completedCodeChallengeLevels.indexOf(levelId) > -1
  }

  setCompletedCodeChallenge(levelId: number) {
    if (!this.hasCompletedCodeChallenge(levelId)) {
      this.storage.completedLevels.push(levelId)
      this.save()
    }
  }

  getLeftContainerWidthInPixels(): number | undefined {
    return this.storage.leftContainerWidthInPixels
  }

  setLeftContainerWidthInPixels(value: number | undefined) {
    this.storage.leftContainerWidthInPixels = value
    this.save()
  }
}
