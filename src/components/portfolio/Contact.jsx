import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, FileText, Loader2, Check } from "lucide-react";
import { base44 } from "@/api/base44Client";
import SectionTitle from "./SectionTitle";
import MagneticButton from "./MagneticButton";
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill in your name, email, and message." });
      return;
    }
    setStatus("sending");
    try {
      await base44.entities.ContactMessage.create(form);
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      toast({ title: "Message sent — thank you! ✦", description: "Lissette will get back to you soon." });
      setTimeout(() => setStatus("idle"), 2500);
    } catch {
      setStatus("idle");
      toast({ title: "Something went wrong. Please try again." });
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionTitle eyebrow="07 — Let's Connect">Get In Touch</SectionTitle>

      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Form */}
        <form onSubmit={submit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input value={form.name} onChange={update("name")} placeholder="Your Name"
              className="rounded-xl border border-gold/20 bg-noir/60 px-4 py-3 text-cream outline-none focus:border-gold/60" />
            <input value={form.email} onChange={update("email")} type="email" placeholder="Email"
              className="rounded-xl border border-gold/20 bg-noir/60 px-4 py-3 text-cream outline-none focus:border-gold/60" />
          </div>
          <input value={form.subject} onChange={update("subject")} placeholder="Subject"
            className="w-full rounded-xl border border-gold/20 bg-noir/60 px-4 py-3 text-cream outline-none focus:border-gold/60" />
          <textarea value={form.message} onChange={update("message")} placeholder="Message" rows={6}
            className="w-full resize-none rounded-xl border border-gold/20 bg-noir/60 px-4 py-3 text-cream outline-none focus:border-gold/60" />
          <MagneticButton
            as="button" type="submit" disabled={status === "sending"}
            className="rounded-full bg-gold px-8 py-3 text-sm font-semibold text-noir shadow-[0_0_30px_rgba(212,168,83,0.3)] disabled:opacity-70"
          >
            {status === "sending" ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…</>
              : status === "sent" ? <><Check className="mr-2 h-4 w-4" /> Sent</>
              : "Send Message"}
          </MagneticButton>
        </form>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="lg:pl-8"
        >
          <h3 className="font-serif-display text-3xl italic leading-snug text-cream">
            Ready to work with someone creative, detail-oriented, and passionate about security?
          </h3>
          <p className="mt-4 text-cream/65">
            Actively seeking entry-level cybersecurity and QA engineering roles. Let's talk!
          </p>

          <div className="mt-8 space-y-4 text-cream/80">
            <a href="mailto:Lissette.deleon@my.utsa.edu" className="flex items-center gap-3 hover:text-gold">
              <Mail className="h-5 w-5 text-gold" /> Lissette.deleon@my.utsa.edu
            </a>
            <a href="tel:+18327957552" className="flex items-center gap-3 hover:text-gold">
              <Phone className="h-5 w-5 text-gold" /> (832) 795-7552
            </a>
            <p className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-gold" /> San Antonio, TX
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold/25 px-5 py-2.5 text-sm text-cream/85 hover:border-gold/60 hover:text-gold">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href="https://github.com/joyee-c/LSDM" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold/25 px-5 py-2.5 text-sm text-cream/85 hover:border-gold/60 hover:text-gold">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-rose-dusty/15 px-5 py-2.5 text-sm text-rose-dusty hover:bg-rose-dusty/25">
              <FileText className="h-4 w-4" /> Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}