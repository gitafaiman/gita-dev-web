import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };
    const userID = import.meta.env.VITE_EMAIL_JS_USER_ID;
    const serviceID = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
    emailjs.send(serviceID, templateID, templateParams, userID).then(
      () => {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon!",
          duration: 3000,
        });

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });

        setIsSubmitting(false);
      },
      (error) => {
        toast({
          title: "Error",
          description: "Something went wrong while sending your message. Please try again.",
          duration: 5000,
        });
        setIsSubmitting(false);
      }
    );
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-pink/5 to-purple/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-pink mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Have a project in mind? Let's talk about it. Send me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-pink/10">
            <h3 className="text-2xl font-semibold mb-6 gradient-text">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-pink/10 p-3 rounded-full">
                  <Mail size={24} className="text-pink" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:rcobersyus@gmail.com"
                    className="text-muted-foreground hover:text-pink transition-colors"
                  >
                    rcobersyus@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-pink/10 p-3 rounded-full">
                  <Phone size={24} className="text-pink" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+1234567890" className="text-muted-foreground hover:text-pink transition-colors">
                    +27 (76) 084-6933
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-pink to-purple rounded-2xl text-white">
              <h4 className="font-semibold text-lg mb-2">Let's connect!</h4>
              <p className="mb-4 opacity-90">Follow me on social media or check out my latest projects.</p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/rivkicobersy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
                >
                  <Github />
                </a>
                <a
                  href="https://www.linkedin.com/in/rivkacobersy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
                >
                  <Linkedin />
                </a>
                <a
                  href="mailto:rcobersyus@gmail.com"
                  className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
                >
                  <Mail />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg border border-pink/10">
            <h3 className="text-2xl font-semibold mb-6 gradient-text">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2">
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-pink focus:border-transparent"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-pink focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-pink focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-pink focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-pink focus:border-transparent resize-none"
                  placeholder="I'd like to discuss a project..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full bg-pink text-white font-medium py-3 px-6 rounded-lg overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-pink to-purple transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0" />
                <span className="relative z-10 flex items-center justify-center">
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message
                      <Send size={18} className="ml-2" />
                    </span>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
