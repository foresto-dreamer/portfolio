import { useEffect } from "react";

function Navbar() {

  useEffect(() => {

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    const handleScroll = () => {

      let current = "";

      sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
          link.classList.add("active");
        }
      });

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <nav className="navbar">

      <div className="logo">
        My Portfolio
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>

        <li>
          <a
            href={`${import.meta.env.BASE_URL}Resume_Manishdey.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>

        <li><a href="#contact">Contact</a></li>
      </ul>

    </nav>
  );
}

export default Navbar;