/**
 * Luxonの初期設定を記述する
 */

import { DateTime, Settings } from 'luxon'

Settings.defaultLocale = 'ja'
Settings.defaultZone = 'Asia/Tokyo'

export const luxon = DateTime
export type LuxonDateTime = DateTime
