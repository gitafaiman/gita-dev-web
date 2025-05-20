import { useEffect, useRef } from "react";

const SkillCarousel = () => {
  const skills = [
    "HTML & CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "Bootstrap",
    "Responsive Design",
    "Git",
    "Postman",
    "WinScp",
    "SwipperJS",
    "EmailJS",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Canva",
  ];

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = carouselRef.current;

    if (!scrollContainer) return;

    // Clone the items to make a seamless loop
    const items = Array.from(scrollContainer.querySelectorAll(".skill-item"));

    // Clone each item and append to the container for a seamless loop
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      scrollContainer.appendChild(clone);
    });

    const scrollWidth = scrollContainer.scrollWidth / 2;
    let scrollPosition = 0;

    const animate = () => {
      if (!scrollContainer) return;

      scrollPosition += 1.2; // Speed control

      // When we reach the end of the first set of items, seamlessly jump back
      if (scrollPosition >= scrollWidth) {
        scrollPosition = 0;
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft = scrollPosition;
      }

      requestAnimationFrame(animate);
    };

    // Start animation
    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="overflow-hidden w-full py-12">
      <div ref={carouselRef} className="flex gap-4 overflow-x-hidden whitespace-nowrap skill-carousel">
        {skills.map((skill, index) => (
          <span
            key={`skill-${index}`}
            className="bg-white px-6 py-3 rounded-full border border-pink/20 shadow-sm hover:shadow-md hover:border-pink transition-all duration-300 skill-item"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCarousel;
