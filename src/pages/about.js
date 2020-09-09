import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'

const AboutPage = () => {
    return (
        <div>
            <Header />
            <h1>About me</h1>
            <p>Here you will discover more about me soon.</p>
            <p><Link to="/contact">Go to my contact page</Link></p>
            <Footer />
        </div>
    )
}

export default AboutPage