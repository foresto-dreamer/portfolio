function Projects(){

const projectList = [

{
title:"Rubber Ducky Script Generator",
desc:"Full-stack web application that converts human readable macro commands into executable USB Rubber Ducky payload scripts using a React + Flask architecture.",
tech:["React","Flask","Python","REST API","Vercel","Render"],
github:"https://github.com/foresto-dreamer/rubber-ducky",
live:"https://rubber-ducky-snowy.vercel.app"
},

{
title:"Packet Sniffer",
desc:"Network packet analyzer built with Python and Scapy that captures and inspects packets in real time to demonstrate networking and security concepts.",
tech:["Python","Networking","Scapy"],
github:"https://github.com/foresto-dreamer/PACKETSNIFFER"
},

{
title:"Password Strength Checker",
desc:"Security tool that evaluates password complexity and detects weak patterns while suggesting stronger alternatives.",
tech:["Python","Security","Regex"],
github:"https://github.com/foresto-dreamer/PASSWORD-CHECKER"
},

{
title:"Keylogger Simulator",
desc:"Educational cybersecurity project demonstrating keystroke monitoring concepts for security awareness and analysis.",
tech:["Python","Security","System Monitoring"],
github:"https://github.com/foresto-dreamer/KEYLOGGER"
},

{
title:"Caesar Cipher Tool",
desc:"Simple encryption and decryption tool implementing classical Caesar cipher cryptography techniques.",
tech:["Python","Cryptography"],
github:"https://github.com/foresto-dreamer/CAESER-CIPHER-"
}

]

return(

<section id="projects" className="projects">

<h2 className="section-title">
My <span>Projects</span>
</h2>

<div className="projects-grid">

{projectList.map((proj,index)=>(

<div className="project-card" key={index}>

<h3>{proj.title}</h3>

<p>{proj.desc}</p>

<div className="tech-stack">

{proj.tech.map((tech,i)=>(
<span key={i}>{tech}</span>
))}

</div>

<div className="project-buttons">

<a href={proj.github} target="_blank">
GitHub
</a>

{proj.live && (
<a href={proj.live} target="_blank" className="live-btn">
Live Demo
</a>
)}

</div>

</div>

))}

</div>

</section>

)

}

export default Projects