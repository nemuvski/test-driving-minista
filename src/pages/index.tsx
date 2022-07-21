import { FrontmatterProps, PageProps } from '~/types/page'

export const frontmatter: FrontmatterProps = {
  pageType: 'website',
}

const FrontPage: RC.WithoutChildren<PageProps> = () => {
  return <>フロントページ</>
}

export default FrontPage
