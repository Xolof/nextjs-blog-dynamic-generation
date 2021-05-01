import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Nav = () => {
  const router = useRouter()
  const path = router.asPath
  const basePath = path.split('/')[1]
  return (
    <div>
      <nav className="navbar-container">
          <div className="navbar-left">
            <ul className="navbar-nav">
              <li>
                <Link href="/blog/1">
                  <a className="site-title"
                    aria-current={ basePath === 'blog' ? 'page' : null }
                  >Next.js & Strapi Blog</a>
                </Link>
                <p className="tagline">A blog built with Strapi and Next.js</p>
              </li>
            </ul>
          </div>
        <div className="navbar-right">
          <ul className="navbar-nav">
            <li>
              <Link href="/about">
                <a
                  aria-current={ basePath === 'about' ? 'page' : null }
                >About</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav
