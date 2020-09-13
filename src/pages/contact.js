import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import pageStyles from './page.module.scss'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <div className={pageStyles.main}>
                <h1>Contact</h1>
                <h2>Mes coordonnées</h2>
                <p>Tel. 06 18 58 44 63</p>
                <p>delphine.belet[at]gmail.com</p>
                <p>adresse postale : 26 rue de Bel Air - 49000 Angers</p>
                <p>Vous pouvez me suivre sur 
                    <a href="https://www.linkedin.com/in/delphine-belet-382b1b58/" target="_blank" rel="noopener noreferrer"> Linkedin </a> 
                    et 
                    <a href="https://twitter.com/apsuma_49" target="_blank" rel="noopener noreferrer"> Twitter.</a>
                </p>
            </div>    
        </Layout>
    )
}

export default ContactPage