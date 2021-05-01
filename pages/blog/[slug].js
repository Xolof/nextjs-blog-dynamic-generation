import Layout from '../../components/layout'
import Articles from '../../components/articles'
import Seo from '../../components/seo'
import PaginationLinks from '../../components/paginationLinks'
import { fetchAPI } from '../../lib/api'

const articlesPerPage = 10

const Article = ({ articles, currentPage, numPages, homepage }) => {
  if (!articles.length) {
    return (
          <Layout>
            <Seo seo={homepage.seo} />
                <div>
                  <h1>Blog</h1>
                  <p>There are no articles.</p>
                </div>
          </Layout>
    )
  }

  return (
      <Layout>
        <Seo seo={homepage.seo} />
        <div className="section">
            <div className="container container-large">
                <Articles articles={articles} />
                <p>This is page {currentPage} of {numPages}</p>
                <PaginationLinks
                    currentPage={currentPage}
                    numPages={numPages}
                />
            </div>
        </div>
    </Layout>

  )
}

export async function getStaticPaths () {
  const numArticles = await fetchAPI('/articles/count')
  const numPages = Math.ceil(numArticles / articlesPerPage)

  const indexes = []

  for (let i = 0; i < numPages; i++) {
    indexes.push({ slug: i + 1 })
  }

  return {
    paths: indexes.map((index) => ({
      params: {
        slug: String(index.slug)
      }
    })),
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const currentPage = parseInt(params.slug)
  const numArticles = await fetchAPI('/articles/count')
  const numPages = Math.ceil(numArticles / articlesPerPage)
  // const offset = (currentPage - 1) * articlesPerPage
  const offset = (numPages - currentPage) * articlesPerPage

  const [currentArticles, homepage] = await Promise.all([
    fetchAPI(`/articles?_start=${offset}&_limit=${articlesPerPage}&status=published&_sort=publishedAt`),
    fetchAPI('/homepage')
  ])

  return {
    props: { articles: currentArticles, currentPage, numPages, homepage },
    revalidate: 1
  }
}

export default Article
