import React from 'react'
import PaginationLinkPrev from './paginationLinkPrev'
import PaginationLinkNext from './paginationLinkNext'

const PaginationLinks = ({ currentPage, numPages }) => {
  return (
        <div className="paginationLinks">
            <PaginationLinkPrev
                currentPage={currentPage}
                numPages={numPages}
            />
            <span> </span>
            <PaginationLinkNext
                currentPage={currentPage}
                numPages={numPages}
            />
        </div>
  )
}

export default PaginationLinks
