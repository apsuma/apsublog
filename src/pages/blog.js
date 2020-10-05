import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
            html
            excerpt
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog dev" />
      <h1>Ressources dev</h1>
      <h4>sources créées en Markdown</h4>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          const path = `/blog/${edge.node.fields.slug}`
          return (
            <li className={blogStyles.post}>
              <Link to={path}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.excerpt}</p>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
