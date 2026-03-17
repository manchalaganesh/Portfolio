import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";
import ResumePreview from "./ResumePreview";

const socials = [
  {
    icon: Mail,
    label: "Email",
    value: "manchalaganesh12@gmail.com",
    href: "mailto:manchalaganesh12@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/manchalaganesh",
    href: "https://github.com/manchalaganesh",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ganesh-manchala",
    href: "https://www.linkedin.com/in/ganesh-manchala/",
  },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_vm2g4og",        // ✅ Service ID
        "template_rfvyc28",        // ✅ FIXED Template ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "orJ58q4Wul-IudZo7"       // ✅ Public Key
      );

      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("EMAILJS ERROR:", error);
      alert(error.text || "Failed to send message ❌");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="relative py-28 bg-zinc-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/3 via-transparent to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <motion.div className="text-center mb-16">
          <p className="text-emerald-400 text-sm uppercase mb-2">
            Let's connect
          </p>
          <h2 className="text-4xl font-bold text-white">
            Contact Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* LEFT SIDE */}
          <div className="space-y-6">
            {socials.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500"
              >
                <Icon className="text-emerald-400" size={18} />
                <div>
                  <p className="text-xs text-zinc-500">{label}</p>
                  <p className="text-sm text-white">{value}</p>
                </div>
              </a>
            ))}
            <ResumePreview />
          </div>

          {/* RIGHT SIDE FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              placeholder="Your Name"
              required
              className="w-full p-3 rounded bg-zinc-900 text-white border border-zinc-800"
            />

            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              placeholder="Your Email"
              required
              className="w-full p-3 rounded bg-zinc-900 text-white border border-zinc-800"
            />

            <textarea
              rows={5}
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              placeholder="Your Message"
              required
              className="w-full p-3 rounded bg-zinc-900 text-white border border-zinc-800"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-emerald-500 text-black rounded-xl font-semibold flex items-center justify-center gap-2"
            >
              {loading
                ? "Sending..."
                : submitted
                ? "Message Sent ✅"
                : "Send Message"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}
