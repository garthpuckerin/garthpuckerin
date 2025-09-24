import React from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "garth.puckerin@me.com",
      href: "mailto:garth.puckerin@me.com",
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "(718) 310-8707",
      href: "tel:+17183108707",
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "East Stroudsburg, PA",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: "GitHub",
      href: "https://github.com/garthpuckerin",
      color: "hover:text-gray-900 dark:hover:text-cyan-300",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/garthpuckerin",
      color: "hover:text-blue-600 dark:hover:text-cyan-300",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-slate-100 py-20 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-gray-100"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">Get In Touch</h2>
          <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-gray-300">
            Ready to collaborate on your next project? Let's discuss how we can
            bring your ideas to life with innovative solutions and exceptional
            design.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-8 text-2xl font-bold">Let's Connect</h3>

            <div className="mb-8 space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="rounded-lg bg-cyan-500 p-3 text-white">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-gray-400">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="font-medium text-slate-800 transition-colors duration-200 hover:text-cyan-600 dark:text-gray-100 dark:hover:text-cyan-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium text-slate-800 dark:text-gray-100">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h4 className="mb-4 text-lg font-semibold">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-lg bg-slate-200 p-3 text-slate-600 transition-all duration-200 hover:scale-110 dark:bg-slate-800 dark:text-gray-300 ${link.color}`}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/60">
              <h4 className="mb-2 font-semibold">LMS Administration Expert</h4>
              <p className="text-sm text-slate-600 dark:text-gray-300">
                I'm currently open to new opportunities in LMS administration
                and learning technology. Whether you need help with system
                implementation, integration projects, or ongoing platform
                management, I'd love to discuss how I can help!
              </p>
            </div>
          </div>

          <div>
            <form
              action="mailto:garth.puckerin@me.com"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="subject" value="Portfolio Contact" />
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-100 dark:placeholder-slate-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-100 dark:placeholder-slate-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-100 dark:placeholder-slate-500"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 font-semibold text-white transition-all duration-200 hover:from-cyan-600 hover:to-blue-700 hover:scale-105 shadow-xl"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
