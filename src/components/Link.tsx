import type { AnchorHTMLAttributes } from 'react'

/**
 * サイト内ページへのリンク
 */
export const InBoundLink: RC.WithChildren<AnchorHTMLAttributes<object>> = ({ children, ...props }) => {
  return <a {...props}>{children}</a>
}

/**
 * 外部サイトへのリンク
 */
export const OutBoundLink: RC.WithChildren<AnchorHTMLAttributes<object>> = ({ children, ...props }) => {
  return (
    <a target='_blank' rel='noopener' {...props}>
      {children}
    </a>
  )
}
