import { Briefcase, Gift, Heart, Users } from "lucide-react";
import SkillCarousel from "./SkillCarousel";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-pink/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-pink mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-pink rounded-3xl"></div>
              <div className="bg-white p-1 rounded-3xl shadow-lg relative z-10 hover:shadow-xl transition-shadow duration-300 transform hover:translate-y-[-5px] transition-transform duration-300">
                <div className="bg-gradient-to-br from-pink/20 to-purple/20 rounded-2xl overflow-hidden">
                  <div className="aspect-[4/5] bg-[url('/image.png')] bg-cover bg-center rounded-2xl">
                    <div className="w-full h-full backdrop-brightness-[1.02] flex items-end">
                      <div className="bg-white/80 backdrop-blur-sm w-full p-6 rounded-t-3xl">
                        <h3 className="text-xl font-semibold mb-2">Gita Faiman</h3>
                        <p className="text-muted-foreground">Frontend Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 gradient-text">Hello! I'm Gita</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm the developer behind this website—a passionate full-stack developer always looking for ways to blend
              creativity and functionality through code. From crafting clean designs to solving complex problems, I
              enjoy turning ideas into interactive experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I work with technologies like React, Node.js, TypeScript, and modern CSS to build everything from sleek
              UIs to robust backend systems. I'm always excited to take on new opportunities that help me grow and
              refine my skills.
            </p>
            <h5 className="text-l font-semibold mb-2 gradient-text">
              <a href="/Gita Faiman Resume.pdf" target="_blank">
                View My Resume
              </a>
            </h5>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl shadow-sm border border-pink/10 flex items-center space-x-3 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] transition-transform duration-300">
                <div className="bg-pink/10 p-2 rounded-lg">
                  <Heart size={20} className="text-pink" />
                </div>
                <div>
                  <h4 className="font-medium">Passionate</h4>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl shadow-sm border border-pink/10 flex items-center space-x-3 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] transition-transform duration-300">
                <div className="bg-pink/10 p-2 rounded-lg">
                  <Users size={20} className="text-pink" />
                </div>
                <div>
                  <h4 className="font-medium">Collaborative</h4>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl shadow-sm border border-pink/10 flex items-center space-x-3 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] transition-transform duration-300">
                <div className="bg-pink/10 p-2 rounded-lg">
                  <Briefcase size={20} className="text-pink" />
                </div>
                <div>
                  <h4 className="font-medium">Professional</h4>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl shadow-sm border border-pink/10 flex items-center space-x-3 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] transition-transform duration-300">
                <div className="bg-pink/10 p-2 rounded-lg">
                  <Gift size={20} className="text-pink" />
                </div>
                <div>
                  <h4 className="font-medium">Creative</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold mb-6 gradient-text">My Skills</h3>
          <SkillCarousel />
        </div>
      </div>
    </section>
  );
};

export default About;
