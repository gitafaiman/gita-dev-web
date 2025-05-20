import { Link } from "react-router-dom";

const SummarySection = () => {
  return (
    <div className="bg-white">
      {/* About Summary */}
      <section className="py-16 border-b border-pink/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">About Me</h2>
              <p className="text-muted-foreground mb-6">
                I'm the developer behind this website—a passionate full-stack developer always looking for ways to blend
                creativity and functionality through code. From crafting clean designs to solving complex problems, I
                enjoy turning ideas into interactive experiences.
              </p>
              <Link
                to="/about"
                className="text-pink hover:text-pink-dark font-medium flex items-center px-4 py-2 rounded-md"
              >
                Read more about me
                <svg className="w-5 h-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
            <div className="md:w-1/3">
              <div className="relative">
                <div className="absolute top-3 left-3 w-full h-full border-2 border-pink rounded-2xl z-0"></div>
                <img src="/image.png" alt="Gita Faiman" className="relative w-full object-cover rounded-2xl z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Summary */}
      <section className="py-16 border-b border-pink/10">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Project 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-pink/10">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/chaya.png"
                  alt="E-commerce Platform"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  A creative portfolio website for a graphic designer with smooth animations and gallery features.
                </p>
              </div>
            </div>

            {/* Featured Project 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-pink/10">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/snake.png"
                  alt="Task Management App"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Snake Game</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  A classic Snake game, featuring smooth controls, score tracking, and a retro-inspired design.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/portfolio"
              className="fill-animation bg-pink hover:[&::before]:bg-pink-dark text-white px-8 py-3 rounded-full font-medium inline-block transition-colors transform hover:scale-105 transition-transform duration-300"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Summary */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 ">Let's Work Together</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Interested in collaborating on a project or have questions? I'd love to hear from you!
          </p>
          <Link
            to="/contact"
            className="fill-animation bg-pink hover:[&::before]:bg-pink-dark text-white px-8 py-3 rounded-full font-medium inline-block transition-colors transform hover:scale-105 transition-transform duration-300"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SummarySection;
