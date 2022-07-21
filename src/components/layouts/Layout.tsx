import Footer from '~/components/layouts/Footer'
import Header from '~/components/layouts/Header'

const Layout: RC.WithChildren = ({ children }) => {
  return (
    <div>
      <Header />
      <main role='main'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
