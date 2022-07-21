import { ReactNode } from 'react'

type Props = {
  test: boolean
  match: ReactNode
  not: ReactNode
}

/**
 * 条件でいずれかの要素を出力するコンポーネント
 */
const Either: RC.WithoutChildren<Props> = ({ test, match, not }) => <>{test ? <>{match}</> : <>{not}</>}</>

export default Either
