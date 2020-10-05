import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import blogStyles from "./blog.module.scss"

const Blog2Page = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "Do MMMM, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog Angers" />
      <h1>Blog A deux pas</h1>
      <h4>sources créées avec CMS Contentful</h4>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          const path = `/blog2/${edge.node.slug}`
          return (
            <li className={blogStyles.post}>
              <Link to={path}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog2Page
