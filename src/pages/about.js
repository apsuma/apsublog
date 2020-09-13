import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import pageStyles from './page.module.scss'

const AboutPage = () => {
    return (
        <Layout >
            <Head title="About" />
            <div className={pageStyles.main}>
            <h1>About</h1>
            <h2 >Apsuma</h2>
            <p>Apsuma est un pseudonyme que j’utilise depuis de nombreuses années. Il fait écho aux pays nordiques, et notamment au titre d’une expédition menée au Groenland par Jacques Godin, Gérard Loucel et Philippe Rohan sur les pas d’un de mes écrivains préférés, Jorn Riel.  Apsuma Sukanga signifie « pilier nord » dans l’univers Inuit. Depuis toujours, les imaginaires du nord (littérature, musique, arts visuels) m’accompagnent et quelques voyages m’ont permis de commencer à découvrir les paysages et rencontrer les habitants de ces pays (Islande, Suède, Norvège, Danemark…).</p>
            <h2>Pourquoi ?</h2>
            <p>Après m’être investie pendant presque vingt ans dans le secteur culturel, j’ai eu envie de retourner à quelque chose que j’avais découvert et pratiqué avec beaucoup d’intérêt dans les années 90 : la programmation informatique. Depuis, le web est devenu incontournable, le mobile est devenu une extension de nos corps. J’ai eu envie de pouvoir participer à la création de sites internet et d’applications web ou mobiles. Des formations courtes permettent aujourd’hui à ceux qui choisissent une reconversion professionnelle, de commencer à se former en intensif à un langage de programmation et un framework pour ensuite avoir les bons réflexes pour poursuivre l’apprentissage d’autres langages et l’usage des framework et bibliothèques efficacement et en autonomie. J’ai ainsi passé le titre professionnel de développeur web et mobile.</p>
            <h2>Quelques réalisations</h2>
            <h3>Projet Apsuma - 2020</h3>
            <p>Site internet statique que vous consultez actuellement. Première réalisation avec Gatsby.js / react.js /node.js/JS/ Sass. </p>
            <h3>Projet GuyBook - 2020</h3>
            <p>Création d’un blog pour test et mise en pratique des nouveautés de Symfony5/API Platform2.5/PHP7.4/Twig</p>
            <h3>Projet : Alyx et Gordon (Client : SmartMyData – 44) - 2020</h3>
            <p>développement d'une v2 de plateforme SaaS de traitement de document et d’extraction de données (front en Vue.JS/Less/BootstrapVue) et API en PH7.4/ Symfony 5/ API Platform2.5</p>
            <h3>Projet : Cap Agora (Client :L’Orange Carré – 44) - 2019/20</h3>
            <p>prototype d’une plateforme de suivi des politiques locales et de leur réalisation concrète au fil des mandats successifs(interface citoyen et interface administration de projet, multi collectivités), réalisation collective à 4 développeurs (PHP7.3/Symfony4/Twig/Sass/Bootstrap).</p>
            <h3>Projet : Rahanproject (hackathon 48h- réalisé à 5 – partenariat Here Technologies)</h3>
            <p>application mobile pour perdre du temps  avant un rendez-vous : géolocalisation puis évaluation des points d’intérêts et itinéraires possibles à réaliser en fonction du temps disponible saisi par l’utilisateur à partir de l’emplacement géolocalisé. Génération des itinéraires aller et retour, guide d’aide à la marche. Réalisé avec l’API de HereTechnologie, en JS vanilla. </p>
            <h3>Projet : Bol d’Iode (Client : François et Cécile – 44) – 2019</h3>
            <p>Création d’un site web vitrine pour un hôtel avec module de réservation des chambres et formulaire de contact. Réalisation en PHP7.3/CSS/Bootstrap sans framework, en modèle MVC.</p>
            <h2>Pour en savoir plus</h2>
            <p>Pour découvrir des projets que j'ai réalisés, allez sur <a href="https://github.com/apsuma"> mon compte github</a></p>
            <p><Link to="/contact">Visiter ma page contact</Link></p>
            </div>
        </Layout>
    )
}

export default AboutPage