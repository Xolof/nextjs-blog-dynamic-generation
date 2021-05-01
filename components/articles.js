import React from 'react'
import Card from './card'

const Articles = ({ articles }) => {
  articles.sort((a, b) => {
    return (a.updated_at < b.updated_at) ? 1 : -1
  })

  return (
    <div>
      <div>
        <div>
          {articles.map((article, i) => {
            return (
              <Card article={article} key={`article__left__${article.slug}`} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Articles
