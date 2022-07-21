import { SITE_URL } from '~/constants/general'

/**
 * 引数pathのTrailingSlashを削除して、返却する
 *
 * @param path
 * @returns string
 */
export function removeTrailingSlash(path: string) {
  return path.replace(/\/+$/, '')
}

/**
 * 引数pathにTrailingSlashを付与して、返却する
 *
 * @param path
 * @returns string
 */
export function withTrailingSlash(path: string) {
  return removeTrailingSlash(path) + '/'
}

/**
 * サイトのURLを返却する
 *
 * @param joinPath 末尾に結合するパス (例: /contact)
 * @returns
 */
export function getSiteUrlWithPath(joinPath?: string) {
  const baseUrl = withTrailingSlash(SITE_URL)
  if (!joinPath) {
    return baseUrl
  }
  return baseUrl + joinPath.replace(/^\/+/, '')
}
