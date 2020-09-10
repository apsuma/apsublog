import React from 'react'
import {graphql} from 'gatsby'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug} ){
            title
            publishedDate(fromNow:true)
            body{
                json
                }
            }
        }
`

const Blog = (props) => {
    return (
        <Layout>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json)}
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
        </Layout>
    )
}

export default Blog