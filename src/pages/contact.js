import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'


const ContactPage = () => {
    return (
        <div>
            <Header />
            <h1>Contact me</h1>
            <p>Tel. 06 18 58 44 63</p>
            <p>delphine.belet@gmail.com</p>
            <p>présente sur 
                <a href="https://www.linkedin.com/in/delphine-belet-382b1b58/" target="_blank" rel="noreferrer"> Linkedin </a> 
                et 
                <a href="https://twitter.com/apsuma_49" target="_blank" rel="noreferrer"> twitter</a>
            </p>
            <Footer />
        </div>
    )
}

export default ContactPage