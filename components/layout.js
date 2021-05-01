import Nav from './nav'
import Footer from './footer'

const Layout = ({ children, seo }) => (
  <>
    <Nav />
    {children}
    <Footer />
  </>
)

export default Layout
