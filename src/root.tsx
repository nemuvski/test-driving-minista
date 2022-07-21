import { Head } from 'minista'
import Layout from '~/components/layouts/Layout'
import { getSiteUrlWithPath } from '~/utils/url'
import { SITE_NAME } from '~/constants/general'
import { PageProps } from '~/types/page'

// 基本スタイル等のグローバルなCSS読み込み
import '~/styles/index.scss'

const Root: RC.WithChildren<PageProps> = ({ location, frontmatter, children }) => {
  const siteUrl = getSiteUrlWithPath()

  let pageType = 'article'
  let pageTitle = SITE_NAME
  let pageDescription = ''
  const pageUrl = getSiteUrlWithPath(location.pathname)

  if (frontmatter) {
    pageType = frontmatter.pageType ?? 'article'
    pageTitle = frontmatter.pageName ? `${frontmatter.pageName} – ${SITE_NAME}` : SITE_NAME
    pageDescription = frontmatter.description ?? ''
  }

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <meta name='format-detection' content='telephone=no, email=no, address=no' />

        <meta property='og:url' content={pageUrl} />
        <meta property='og:site_name' content={SITE_NAME} />
        <meta property='og:type' content={pageType} />
        <meta property='og:title' content={pageTitle} />
        <meta property='og:description' content={pageDescription} />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content={pageTitle} />
        <meta name='twitter:description' content={pageDescription} />

        <title>{pageTitle}</title>

        <link rel='canonical' href={siteUrl} />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
      </Head>

      <Layout>{children}</Layout>
    </>
  )
}

export default Root
