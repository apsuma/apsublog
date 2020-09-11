import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
    query($slug: String!){
        markdownRemark(fields: {slug : {eq: $slug}} ){
            frontmatter{
                title
                date
                }
            html
            }
        }
`

const Blog = (props) => {
    return (
        <Layout>
            <Head title={props.data.markdownRemark.frontmatter.title} />
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
        </Layout>
    )
}

export default Blog