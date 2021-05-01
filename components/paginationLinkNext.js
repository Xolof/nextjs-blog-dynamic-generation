import React from 'react'
import Link from 'next/link'

const PaginationLinkNext = ({ currentPage, numPages }) => {
  if (numPages > currentPage) {
    return (
            <Link href={`/blog/${currentPage + 1}`}>
              <a>Next</a>
            </Link>
    )
  }

  return null
}

export default PaginationLinkNext
