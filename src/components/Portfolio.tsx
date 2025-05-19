import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A creative portfolio website for a graphic designer with smooth animations and gallery features.",
      image: "/chaya.png",
      tags: ["React", "Tailwind"],
      liveUrl: "https://chaya-designs.netlify.app/",
      githubUrl: "https://github.com/rivkicobersy/chaya-designs",
      category: "frontend",
    },
    {
      id: 2,
      title: "Snake Game",
      description: "A classic Snake game, featuring smooth controls, score tracking, and a retro-inspired design.",
      image: "/snake.png",
      tags: ["React", "CSS"],
      liveUrl: "https://snakie-game.netlify.app/",
      githubUrl: "https://github.com/rivkicobersy/snake-game",
      category: "frontend",
    },
    {
      id: 3,
      title: "Ecommerce App",
      description:
        "A responsive and modern eCommerce, featuring product listings,  shopping cart, and smooth user navigation.",
      image: "/shop.png",
      tags: ["React", "Tailwind"],
      liveUrl: "https://rivkis-ecommerce.netlify.app/",
      githubUrl: "https://github.com/rivkicobersy/ecommerce-app",
      category: "frontend",
    },

    {
      id: 4,
      title: "Personal Website",
      description: "A interactive personal site  featuring Swiper-powered carousel, and contact functionality.",
      image: "/rivki.png",
      tags: ["React", "Swiper", "EmailJS", "styled-components"],
      liveUrl: "https://rivki-cobersy-website.netlify.app/",
      githubUrl: "https://github.com/rivkicobersy/rivki-cobersy-website",
      category: "frontend",
    },
    {
      id: 5,
      title: "News Aggregator API",
      description: "A RESTful API that collects news from various sources and categorizes them based on content.",
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Node.js", "Express", "MongoDB", "NLP"],
      liveUrl: "#",
      githubUrl: "#",
      category: "backend",
    },
    {
      id: 6,
      title: "This Website",
      description: "A fun website for a web devloper with smooth animations and gallery features.",
      image: "/this.png",
      tags: ["React", "Tailwind"],
      liveUrl: "https://rivki-cobersy.netlify.app/",
      githubUrl: "https://github.com/rivkicobersy/rivki-website",
      category: "frontend",
    },
  ];

  const filterProjects = (category: string) => {
    setActiveFilter(category);
  };

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
          <div className="w-24 h-1 bg-pink mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Check out some of my recent projects. Each one is crafted with attention to detail and focus on user
            experience.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["all", "frontend", "backend"].map((category) => (
            <button
              key={category}
              onClick={() => filterProjects(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 fill-animation ${
                activeFilter === category
                  ? "bg-pink text-white shadow-md"
                  : "bg-white border border-pink/20 text-foreground hover:bg-pink/10"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-pink/10"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-pink transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-pink/10 text-pink px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fill-animation-border px-3 py-1 rounded-md flex items-center text-foreground hover:text-pink transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fill-animation-border px-3 py-1 rounded-md flex items-center text-foreground hover:text-pink transition-colors"
                    >
                      <span className="text-sm">Live Demo</span>
                      <ExternalLink size={16} className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
