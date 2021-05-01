import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { fetchAPI } from '../lib/api'
import ReactMarkdown from 'react-markdown'

const About = ({ homepage, aboutPage }) => {
  return (
    <Layout>
      <Seo seo={homepage.seo} />
      <div className="section">
        <div className="container container-small about-page">
          <h1>{aboutPage.name}</h1>
          <hr/>
          <ReactMarkdown source={aboutPage.content} escapeHtml={false} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps () {
  // Run API calls in parallel
  const [homepage, aboutPage] = await Promise.all([
    fetchAPI('/homepage'),
    fetchAPI('/pages/1')
  ])

  return {
    props: { homepage, aboutPage },
    revalidate: 1
  }
}

export default About
