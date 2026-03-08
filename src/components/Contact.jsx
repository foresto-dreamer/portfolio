import { useRef } from "react"
import emailjs from "@emailjs/browser"

function Contact(){

const form = useRef()

const sendEmail = (e) => {
e.preventDefault()

emailjs.sendForm(
import.meta.env.VITE_EMAIL_SERVICE,
import.meta.env.VITE_EMAIL_TEMPLATE,
form.current,
import.meta.env.VITE_EMAIL_PUBLIC
)
.then(() => {
alert("Message sent successfully 🚀")
})
.catch(() => {
alert("Failed to send message ❌")
})

e.target.reset()
}

return(

<section id="contact" className="contact">

<div className="contact-container">

<div className="contact-left">

<h2 className="section-title">
Let's Build <span>Something Secure</span>
</h2>

<p className="contact-text">
Interested in cybersecurity, cloud computing, or secure software development?
Feel free to send a message.
</p>

<div className="contact-info">

<div className="contact-item">
📧 manishdey356@gmail.com
</div>

<div className="contact-item">
💻 github.com/foresto-dreamer
</div>

<div className="contact-item">
🔗 linkedin.com/in/manish-dey87
</div>

</div>

</div>


<div className="contact-right">

<form ref={form} onSubmit={sendEmail} className="contact-form">

<input
type="text"
name="user_name"
placeholder="Your Name"
required
/>

<input
type="email"
name="user_email"
placeholder="Email Address"
required
/>

<textarea
name="message"
rows="6"
placeholder="Your Message"
required
/>

<button type="submit">
Send Message
</button>

</form>

</div>

</div>

</section>

)

}

export default Contact