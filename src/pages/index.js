import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import pageStyles from "./page.module.scss"

const indexPage = () => {
  return (
    <Layout>
      <Head title="Accueil" />
      <div className={pageStyles.main}>
        <h1>Hello !</h1>
        <h4>
          Avec ce blog, j'évoquerai deux sujets que j’ai envie de partager
        </h4>
        <h2>A deux pas</h2>
        <p>
          Des objectifs de balade à réaliser pour découverte de balades à
          réaliser autour d’Angers et Nantes, mon lieu de vie depuis neuf ans.
        </p>
        <h2>Ressources dev</h2>
        <p>
          Mes ressources pour améliorer au quotidien ma pratique de
          développeur en PHP et en JavaScript avec les bibliothèques et
          frameworks associés à ces deux langages. Ces ressources pourront aussi
          concerner d’autres outils ou des sujets liés au css dans les projets.
        </p>
        <h4>
          Vous recherchez un developpeur pour un projet, découvrez{" "}
          <Link to="/about">mes références</Link> et{" "}
          <Link to="/contact">Contactez-moi</Link> pour que nous échangions sur
          votre projet.
        </h4>
      </div>
    </Layout>
  )
}

export default indexPage
