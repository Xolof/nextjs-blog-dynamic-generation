import React from 'react'
import Link from 'next/link'
import Moment from 'react-moment'

const Card = ({ article }) => {
  return (
    <div className="card card-muted">
      <div className="card-body">
          <h1>
            <Link as={`/article/${article.slug}`} href="/article/[id]">
              {article.title}
            </Link>
          </h1>
        <p id="description" className="text-normal">
          {article.DescriptionHeading} {article.description}
        </p>
        <p className="text-meta">
          Published <Moment format="MMM Do YYYY">{article.published_at}</Moment>
        </p>
      </div>
      <hr/>
    </div>
  )
}

export default Card
