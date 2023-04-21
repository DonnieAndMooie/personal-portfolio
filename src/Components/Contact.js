import React from 'react'
import  Icon from '@mdi/react'
import { mdiEmailBox, mdiPhone, mdiLinkedin, mdiGithub } from '@mdi/js'

export default function Contact() {
  return (
    <footer>
        <h2>Contact Me</h2>
        <p>If you're interested in working together, please get in touch!</p>
        <div className="contact-icons">
          <a href="mailto:owenjeaves@gmail.com" target={"_blank"} rel="noreferrer">
            <Icon path={mdiEmailBox} size={2} />
            <p>owenjeaves@gmail.com</p>
          </a>
          <a href="tel:07840231230">
            <Icon path={mdiPhone} size={2} />
            <p>07840231230</p>
          </a>
          <a href="https://www.linkedin.com/in/owen-eaves-73a7ba219/" target={"_blank"} rel="noreferrer">
            <Icon path={mdiLinkedin} size={2} />
            <p>Owen Eaves</p>
          </a>
          <a href="https://github.com/DonnieAndMooie?tab=repositories" target={"_blank"} rel="noreferrer">
            <Icon path={mdiGithub} size={2} />
            <p>DonnieAndMooie</p>
          </a>
        </div>
    </footer>
  )
}
