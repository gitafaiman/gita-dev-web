import React, { useEffect, useState } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = `function createAwesomeWebsite() {
  const skills = [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'Creativity'
  ];

  return (
    <Beautiful Website/>
  );
}`;
  const [currentIndex, setCurrentIndex] = useState(0);

  const escapeHTML = (str: string) => str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prevText) => prevText + fullText[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 50); // Faster typing speed

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Function to colorize the code
  const colorizeCode = (text: string) => {
    // Replace different parts of the code with colored spans
    return text
      .replace(/(function|const|return)/g, '<span class="code-keyword">$1</span>')
      .replace(/(createAwesomeWebsite)/g, '<span class="code-function">$1</span>')
      .replace(
        /('React'|'TypeScript'|'Tailwind CSS'|'Node.js'|'Creativity'|<Beautiful Website\/>)/g,
        '<span class="code-string">$1</span>'
      )
      .replace(/(&lt;Beautiful Website\/&gt;)/g, '<span class="code-string">$1</span>')
      .replace(/(\{|\}|\[|\]|\(|\))/g, '<span class="code-bracket">$1</span>');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-pink/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple/10 rounded-full blur-3xl animate-float" />

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
              <span className="gradient-text">Turning ideas into interactive experiences</span>
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in delay-100">
              Hi! I'm Rivki, a passionate frontend developer creating beautiful, responsive websites that solve real
              problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in delay-200">
              <a
                href="/contact"
                className="fill-animation bg-pink hover:bg-pink-dark text-white px-8 py-3 rounded-full font-medium transition-colors transform hover:scale-105 transition-transform duration-300"
              >
                Get in Touch
              </a>
              <a
                href="/portfolio"
                className="fill-animation-border border-2 border-pink text-pink hover:bg-pink/10 px-8 py-3 rounded-full font-medium transition-colors transform hover:scale-105 transition-transform duration-300"
              >
                View My Work
              </a>
            </div>
          </div>

          <div className="hidden md:flex justify-center animate-fade-in">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-pink to-purple opacity-20 rounded-3xl blur-xl animate-float"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-pink/20 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 transition-transform duration-300">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-pink rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-soft rounded-full"></div>
                    <div className="w-3 h-3 bg-purple rounded-full"></div>
                  </div>
                </div>
                <pre className="font-mono text-sm overflow-visible">
                  <code
                    className="text-foreground typing-cursor"
                    dangerouslySetInnerHTML={{ __html: colorizeCode(escapeHTML(displayText)) }}
                  />
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
