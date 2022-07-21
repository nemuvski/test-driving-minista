type Props = {
  test: boolean
}

/**
 * 条件で内包する要素を出力するコンポーネント
 */
const Maybe: RC.WithChildren<Props> = ({ test, children }) => <>{test && children}</>

export default Maybe
