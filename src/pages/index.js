import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'

const indexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hello</h1>
      <h2>I'm Delphine, a full-stack dev living in Angers</h2>
      <p>Need a dev ? <Link to="/contact">Contact me</Link></p>
      <p>Go to my github <a href="https://github.com/apsuma"> here</a></p>
      <Footer />
    </div>
  )
}

export default indexPage
