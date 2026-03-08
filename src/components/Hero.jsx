import { useEffect, useRef } from "react"
import Typed from "typed.js"

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

<section className="hero">

<div className="hero-left">

<h1>
Hi, I'm <span className="highlight">Manish Dey</span>
</h1>

<h2>
I'm a <span ref={textRef}></span>
</h2>

<p>
Passionate about cybersecurity, cloud computing,
and building secure software systems.
</p>

<button className="btn">
Download Resume
</button>

</div>

<div className="hero-right">

<div className="profile-circle">

<img
src="https://i.pravatar.cc/300"
alt="profile"
/>

</div>

</div>

</section>

)

}

export default Hero