import React from 'react'
import ProfilePic from '../Images/profile-pic.jpg'

export default function Header() {
  return (
    <section className='about'>
        <div className="profile-pic">
            <img src={ProfilePic} alt="Me!" />
            <h1>Owen Eaves</h1>
        </div>
        <div className="about-me">
            <h2>About Me</h2>
            <p><strong>Hi! I'm Owen.</strong> and I love coding.
            Growing up, I always had a real passion for anything and everything
             to do with technology. Of course this meant when I got
             the opportunity to take Computer Science at both GCSE and A Level,
             I jumped at the chance - and I loved it! I really enjoy learning how things
             work, and just how amazingly complex a computer <em>really</em> is.
             Most of all though, I enjoyed the little bits of programming we got to do.
             </p>
             <p>
             When I finished my education, I wasn't ready to give up on coding. That's when I was recommended <a href="https://www.theodinproject.com" target={"_blank"} rel="noreferrer">The Odin Project</a>.
             It's a free online curriculum that teaches you everything you need to know to be
             a full stack web dev. I can now make you awesome websites - like this one!
             You can view some more of my work below:</p>
        </div>
        
    </section>
  )
}
