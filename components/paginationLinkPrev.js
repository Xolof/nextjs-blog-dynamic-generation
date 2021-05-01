import React from 'react'
import Link from 'next/link'

const PaginationLinkPrev = ({ currentPage, numPages }) => {
  if (currentPage !== 1) {
    return (
            <Link href={`/blog/${currentPage - 1}`}>
              <a>Previous</a>
            </Link>
    )
  }

  return null
}

export default PaginationLinkPrev
