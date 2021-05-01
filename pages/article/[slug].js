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
  const articles = await fetchAPI(
    `/articles?slug=${params.slug}&status=published`
  )
  const article = articles[0]

  const numArticles = await fetchAPI('/articles/count')

  let allArticles = []
  let offset = 0
  const limit = 997
  let currentArticles = []
  while (allArticles.length < numArticles) {
    currentArticles = await fetchAPI(`/articles?_start=${offset}&_limit=${limit}&status=published&_sort=publishedAt`)
    allArticles = allArticles.concat(currentArticles)
    offset += 997
  }

  // Find index of article in allArticles.
  for (let i = 0; i < numArticles; i++) {
    if (allArticles[i].slug === article.slug) {
      var index = i
    };
  }
  // Check if there are articles before or after.
  let previousArticle = false
  let nextArticle = false
  if (index > 0) {
    previousArticle = allArticles[index - 1].slug
  }
  if (numArticles > index + 1) {
    nextArticle = allArticles[index + 1].slug
  }

  return {
    props: { article, nextArticle, previousArticle },
  }
}

export default Article
