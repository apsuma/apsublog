import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About me</h1>
            <p>Here you will discover more about me soon.</p>
            <p><Link to="/contact">Go to my contact page</Link></p>
        </Layout>
    )
}

export default AboutPage