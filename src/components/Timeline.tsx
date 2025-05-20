import React from "react";
import { Briefcase, School, Calendar } from "lucide-react";

const Timeline = () => {
  const education = [
    {
      id: 1,
      title: "Bachelor's in Computer Science",
      institution: "Touro College",
      period: "2021 - 2023",
      description: "Studied core programming concepts, data structures, algorithms, and modern web technologies.",
    }, {
      id: 2,
      title: "Bachelor's in Computer Science",
      institution: "Touro College",
      period: "2021 - 2023",
      description: "Studied core programming concepts, data structures, algorithms, and modern web technologies.",
    },
    {
      id: 2,
      title: "Full Stack Web Development Bootcamp",
      institution: "Actualize",
      period: "2022",
      description: "Focused on full-stack web development, covering both frontend frameworks and backend technologies.",
    },
  ];

  const experience = [
    {
      id: 1,
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2022 - Present",
      description:
        "Worked with a variety of clients to design and develop custom web applications. Delivered full-stack solutions using modern technologies and best practices tailored to each project's needs.",
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Trackatic",
      period: "2023 - Present",
      description:
        "I optimize backend processes and enhance frontend features to improve performance and user experience, including generating automated PDF and Excel reports using Node.js and Puppeteer.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Experience</h2>
          <div className="w-24 h-1 bg-pink mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <div className="animate-fade-in">
            <div className="flex items-center mb-8">
              <div className="bg-pink/10 p-3 rounded-full">
                <School size={24} className="text-pink" />
              </div>
              <h3 className="text-2xl font-bold ml-4">Education</h3>
            </div>

            <div className="relative border-l-2 border-pink/20 pl-8">
              {education.map((item, index) => (
                <div
                  key={item.id}
                  className={`mb-12 relative animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="absolute -left-10 bg-pink w-5 h-5 rounded-full border-4 border-white"></div>
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] transition-transform duration-300">
                    <div className="flex items-center text-pink mb-2">
                      <Calendar size={16} className="mr-2" />
                      <span className="font-medium">{item.period}</span>
                    </div>
                    <h4 className="text-xl font-semibold">{item.title}</h4>
                    <p className="text-muted-foreground">{item.institution}</p>
                    <p className="mt-3">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="animate-fade-in delay-100">
            <div className="flex items-center mb-8">
              <div className="bg-pink/10 p-3 rounded-full">
                <Briefcase size={24} className="text-pink" />
              </div>
              <h3 className="text-2xl font-bold ml-4">Experience</h3>
            </div>

            <div className="relative border-l-2 border-pink/20 pl-8">
              {experience.map((item, index) => (
                <div
                  key={item.id}
                  className={`mb-12 relative animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2 + 0.2}s` }}
                >
                  <div className="absolute -left-10 bg-pink w-5 h-5 rounded-full border-4 border-white"></div>
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] transition-transform duration-300">
                    <div className="flex items-center text-pink mb-2">
                      <Calendar size={16} className="mr-2" />
                      <span className="font-medium">{item.period}</span>
                    </div>
                    <h4 className="text-xl font-semibold">{item.title}</h4>
                    <p className="text-muted-foreground">{item.company}</p>
                    <p className="mt-3">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
