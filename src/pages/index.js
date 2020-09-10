import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const indexPage = () => {
  return (
    <Layout>
      <h1>Hello !</h1>
      <h2>Je suis Apsuma, j'habite à Angers en Pays de la Loire depuis 2011. J'ai commencé une nouvelle vie professionnelle de développeur web full stack en 2019.</h2>
      <p>Vous recherchez un dev ? <Link to="/contact">Contactez moi</Link></p>
      <p>Pour découvrir des projets que j'ai réalisés, allez sur mon compte github <a href="https://github.com/apsuma"> ici</a></p>
    </Layout>
  )

}

export default indexPage
