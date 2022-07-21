import type { MinistaLocation } from 'minista'

export type FrontmatterProps = {
  pageType?: 'website' | 'article'
  pageName?: string
  description?: string
}

export type PageProps<T extends object = object> = {
  location: MinistaLocation
  frontmatter?: FrontmatterProps
} & T
