import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>Pour me contacter :</h1>
            <p>Tel. 06 18 58 44 63</p>
            <p>delphine.belet@gmail.com</p>
            <p>Vous pouvez me suivre sur 
                <a href="https://www.linkedin.com/in/delphine-belet-382b1b58/" target="_blank" rel="noreferrer"> Linkedin </a> 
                et 
                <a href="https://twitter.com/apsuma_49" target="_blank" rel="noreferrer"> twitter</a>
            </p>       
        </Layout>
    )
}

export default ContactPage