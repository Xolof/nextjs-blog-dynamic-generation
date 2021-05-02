import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'
import { fetchAPI } from '../../lib/api'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import NextPrevPostLinks from '../../components/nextPrevPostLinks'
// import { useRouter } from 'next/router'

const Article = ({ article, nextArticle, previousArticle }) => {
  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true
  }

  return (
    <Layout>
      <Seo seo={seo} />
      <div className="section">
        <div className="container container-small">
          <h1>{article.title}</h1>
          <hr/>
          <h2 className="description-heading">{article.DescriptionHeading}</h2>
          <p className="description">{article.description}</p>
          <ReactMarkdown source={article.content} escapeHtml={false} />
          <div className="grid-small flex-left" data-grid="true">
            <hr/>
            <div className="width-expand">
              <p className="text-meta">
                Published <Moment format="MMM Do YYYY">{article.published_at}</Moment>
              </p>
              <p className="text-meta margin-bottom">
                By {article.author.name}
              </p>
            </div>
            <div className="nextPrevPostLinks">
              <NextPrevPostLinks
                nextArticle = {nextArticle}
                previousArticle = {previousArticle}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps ({ params }) {
  let queries = [fetchAPI(`/articles?slug=${params.slug}&status=published`)]
  const numArticles = await fetchAPI('/articles/count')

  let offset = 0
  const limit = 997 // Can only get 997 items from Strapi at one time.
  let articlesAdded = 0
  while (articlesAdded < numArticles) {
    queries.push(fetchAPI(`/articles?_start=${offset}&_limit=${limit}&status=published&_sort=publishedAt`))
    offset += 997
    articlesAdded += limit
  }

  const articleArr = await Promise.all(queries)
  const article = articleArr[0][0]
  const otherArticles = articleArr.slice(1).reduce((a, b) => a.concat(b), [])

  // Find index of article in otherArticles.
  for (let i = 0; i < numArticles; i++) {
    if (otherArticles[i].slug === article.slug) {
      var index = i
    };
  }
  // Check if there are articles before or after.
  let previousArticle = false
  let nextArticle = false
  if (index > 0) {
    previousArticle = otherArticles[index - 1].slug
  }
  if (numArticles > index + 1) {
    nextArticle = otherArticles[index + 1].slug
  }

  return {
    props: { article, nextArticle, previousArticle },
  }
}

export default Article
