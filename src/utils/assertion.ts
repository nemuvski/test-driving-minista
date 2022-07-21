import { luxon } from '~/libs/luxon'
import type { LuxonDateTime } from '~/libs/luxon'

/**
 * nullish値でない場合はTrueを返却する
 */
export function isNotNullish<T>(value: unknown): value is NonNullable<T> {
  return !(value === undefined || value === null)
}

/**
 * numberオブジェクトである場合はTrueを返却する
 */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number'
}

/**
 * stringオブジェクトである場合はTrueを返却する
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string'
}

/**
 * booleanオブジェクトである場合はTrueを返却する
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean'
}

/**
 * Dateオブジェクトである場合はTrueを返却する
 */
export function isDate(value: unknown): value is Date {
  return value instanceof Date
}

/**
 * DateTime（LuxonDateTime）オブジェクトである場合はTrueを返却する
 */
export function isLuxonDateTime(value: unknown): value is LuxonDateTime {
  // instanceofで判定しても良いが、APIを利用する形とした
  return luxon.isDateTime(value)
}
