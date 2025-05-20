import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [displayText, setDisplayText] = useState("");
  const fullText = "Gita.dev";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prevText) => prevText + fullText[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 120); // Typing speed

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <footer className="bg-gradient-to-b from-white to-pink/10 py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold font-poppins">
              <span className="gradient-text typing-cursor">{displayText}</span>
            </h2>
            <p className="text-muted-foreground mt-2">Creating beautiful digital experiences</p>
          </div>

          <div className="flex flex-col space-y-2 mb-6 md:mb-0">
            <a href="/" className="text-foreground hover:text-pink transition-colors flex items-center">
              <span>Home</span>
            </a>
            <a href="/about" className="text-foreground hover:text-pink transition-colors flex items-center">
              <span>About</span>
            </a>
            <a href="/portfolio" className="text-foreground hover:text-pink transition-colors flex items-center">
              <span>Portfolio</span>
            </a>
            <a href="/contact" className="text-foreground hover:text-pink transition-colors flex items-center">
              <span>Contact</span>
            </a>
          </div>

          <div className="flex flex-col space-y-4 mb-6 md:mb-0">
            <a
              href="https://github.com/gitafaiman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-pink transition-colors p-2 fill-animation-border rounded-full"
            >
              <Github />
            </a>

            <a
              href="https://www.linkedin.com/in/reachglevin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-pink transition-colors p-2 fill-animation-border rounded-full"
            >
              <Linkedin />
            </a>
            <a
              href="mailto:reachglevin@gmail.com"
              className="text-foreground hover:text-pink transition-colors p-2 fill-animation-border rounded-full"
            >
              <Mail />
            </a>
          </div>
        </div>

        <div className="border-t border-muted mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} Gita Faiman. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
