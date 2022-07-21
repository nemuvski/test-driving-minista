declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'production' | 'development'
  }
}

/**
 * RC (ReactComponent)
 */
declare namespace RC {
  /**
   * 子要素を持つ(childrenプロパティあり)コンポーネントの型
   */
  type WithChildren<Props = object> = React.FC<React.PropsWithChildren<Props>>

  /**
   * 子要素を持たない(childrenプロパティなし)コンポーネントの型
   */
  type WithoutChildren<Props = object> = React.FC<Props>
}
