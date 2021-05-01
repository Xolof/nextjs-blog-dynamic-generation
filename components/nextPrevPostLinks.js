import React from 'react'
import NextPostLink from './nextPostLink'
import PrevPostLink from './prevPostLink'

const NextPrevPostLinks = ({ nextArticle, previousArticle }) => {
  return (
        <div>
            <PrevPostLink
              previousArticle = {previousArticle}
            />
            <NextPostLink
              nextArticle = {nextArticle}
            />
        </div>
  )
}

export default NextPrevPostLinks
