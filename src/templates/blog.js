import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import blogStyles from './blogtemp.module.scss'

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
            <div className={blogStyles.post} dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
        </Layout>
    )
}

export default Blog