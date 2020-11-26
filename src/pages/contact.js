import React from "react"
import {useStaticQuery,graphql} from "gatsby"
import ContactForm from "../components/contactForm"
import ContactInfo from "../components/contactInfo"
import HeroOther from "../components/heroOthers"
import Layout from "../components/layout"
import ContactIllustration from "../images/illustration/contact-illustration.png"
import SEO from "../components/seo"

const ContactPage = () => {
  let data = useStaticQuery(graphql`
  query ContactPage{
    pagesYaml(page: {eq: "contact"}) {
      email
      phone
      intro
      address
    }
  }
  `)
  data = data.pagesYaml;
  return (
    <div className="contact">
      <SEO pageTitle="Contact Us" />
      <Layout>
        <HeroOther
          title="contact"
          intro={data.intro}
          image={ContactIllustration}
        />
        <section className="section container">
          <div className="contact__formContainer">
            <h3>Please fill the form below for us to contact you</h3>
            <ContactForm />
          </div>
          <ContactInfo phone={data.phone} address={data.address} email={data.email} />
        </section>
      </Layout>
    </div>
  )
}

export default ContactPage
