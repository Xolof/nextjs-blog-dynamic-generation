import React from 'react'
import Link from 'next/link'

const PrevPostLink = ({ previousArticle }) => {
  if (previousArticle) {
    return (
            <div className="prevPostLink">
              <Link href={`/article/${previousArticle}`}
              >
                <a>
                  <svg className="svg-icon" width="24" height="24" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M20 13v-2H8l4-4-1-2-7 7 7 7 1-2-4-4z" fill="currentColor"></path></svg>
                  Previous post
                </a>
              </Link>
            </div>
    )
  }

  return null
}

export default PrevPostLink
