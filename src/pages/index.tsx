import { FrontmatterProps, PageProps } from '~/types/page'

export const frontmatter: FrontmatterProps = {
  pageType: 'website',
}

const FrontPage: RC.WithoutChildren<PageProps> = () => {
  return (
    <div>
      <img src='/assets/images/example.png' alt='example.png' />
    </div>
  )
}

export default FrontPage
