import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About me</h1>
            <p>Après une formation en développement web à la wild code school en php/symfony/mysql, ce site est un projet que j'ai réalisé avec gatsby.js/react/node.js/Sass.</p>
            <p><Link to="/contact">Visiter ma page contact</Link></p>
        </Layout>
    )
}

export default AboutPage