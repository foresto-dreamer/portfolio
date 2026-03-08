import { useEffect, useRef } from "react"
import Typed from "typed.js"
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"

function Hero(){

const textRef = useRef(null)

useEffect(() => {

const typed = new Typed(textRef.current, {
strings: [
"Cybersecurity Enthusiast",
"Cloud Computing Learner",
"Software Developer",
"Security Researcher"
],
typeSpeed: 60,
backSpeed: 40,
loop: true
})

return () => {
typed.destroy()
}

}, [])

return(

<section id="home" className="hero">

<div className="hero-left">

<h1>
<span className="highlight">Manish Dey</span>
</h1>

<h2>
  I'm a <span className="role" ref={textRef}></span>
</h2>

<p>
Passionate about cybersecurity, cloud computing,
and building secure software systems.
</p>

<button className="btn">
Download Resume
</button>

<div className="socials">

  <a href="https://github.com/foresto-dreamer" target="_blank">
    <FaGithub className="icon" />
  </a>

  <a href="#">
    <FaLinkedin className="icon" />
  </a>

  <a href="#">
    <FaTwitter className="icon" />
  </a>

  <a href="#">
    <FaYoutube className="icon" />
  </a>

</div>

</div>

<div className="hero-right">

  <div className="profile-wrapper">

    <img
      src="https://i.pravatar.cc/300"
      alt="profile"
      className="profile-img"
    />

    <svg className="circle-svg" viewBox="0 0 300 300">

      <circle
        className="arc arc1"
        cx="150"
        cy="150"
        r="140"
        fill="none"
      />

      <circle
        className="arc arc2"
        cx="150"
        cy="150"
        r="140"
        fill="none"
      />

    </svg>

  </div>

</div>


</section>

)

}

export default Hero