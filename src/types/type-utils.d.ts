/**
 * 型定義で利用するユーティリティ
 */
declare namespace TypeUtils {
  /**
   * オブジェクトの指定したプロパティを必須にする
   */
  type PartialRequire<O, K extends keyof O> = { [P in K]-?: O[P] } & O

  /**
   * オブジェクトの最低1つのプロパティを必須にする
   */
  type RequireOne<T, K extends keyof T = keyof T> = K extends keyof T ? PartialRequire<T, K> : never

  /**
   * オブジェクトの指定したプロパティ群を置き換える
   */
  type ReplacePropsType<T, K extends keyof T, N> = Omit<T, K> & { [P in K]: N }
}
