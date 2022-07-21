import { COPYRIGHT_START_YEAR } from '~/constants/general'
import { luxon } from '~/libs/luxon'

/**
 * 現在の年を返却する
 */
export function getCurrentYear() {
  return luxon.now().year
}

/**
 * コピーライトに出力する年表記を返却する
 */
export function getCopyrightYear(startYear = COPYRIGHT_START_YEAR) {
  const currentYear = getCurrentYear()
  if (startYear < currentYear) {
    return `${startYear}–${currentYear}`
  }
  return `${currentYear}`
}
