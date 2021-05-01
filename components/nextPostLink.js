import React from 'react'
import Link from 'next/link'

const NextPostLink = ({ nextArticle }) => {
  if (nextArticle) {
    return (
            <div className="nextPostLink">
              <Link href={`/article/${nextArticle}`}
              >
                <a>
                  Next post
                  <svg className="svg-icon" width="24" height="24" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="m4 13v-2h12l-4-4 1-2 7 7-7 7-1-2 4-4z" fill="currentColor"></path></svg>
                </a>
              </Link>
            </div>
    )
  }

  return null
}

export default NextPostLink
