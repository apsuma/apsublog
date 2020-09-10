import React from 'react'
import {Link, graphql, useStaticQuery } from 'gatsby' 
import Layout from '../components/layout'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query { allMarkdownRemark {
                    edges{
                        node{
                            frontmatter{
                                title
                                date
                            }
                            fields {
                                slug
                            }
                            html
                            excerpt
        }}}}
    `)
     
    return (
        <Layout>
            <h1>Blog</h1>
            <p>Posts will show up here later on.</p>
            <ol>
                {data.allMarkdownRemark.edges.map((edge) => {
                    const path = `/blog/${edge.node.fields.slug}`
                    return (
                        <li>
                            <Link to={path}><h2>{edge.node.frontmatter.title}</h2></Link>
                            <p>{edge.node.excerpt}</p>
                            <p>{edge.node.frontmatter.date}</p>
                        </li>
                    )
                })}
            </ol>

        </Layout>
    )
}

export default BlogPage