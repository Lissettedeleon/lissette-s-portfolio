import React, { useState } from "react";
import { Mail, Phone, MapPin, Loader2, Check } from "lucide-react";
import { base44 } from "@/api/base44Client";
import SectionTitle from "./SectionTitle";
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

  // Cap input lengths to prevent oversized/abusive submissions to the public entity.
  const LIMITS = { name: 100, email: 254, subject: 150, message: 2000 };
  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const update = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e.target.value.slice(0, LIMITS[k]) }));

  const submit = async (e) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      toast({ title: "Please fill in your name, email, and message." });
      return;
    }
    if (!isValidEmail(email)) {
      toast({ title: "Please enter a valid email address." });
      return;
    }
    setStatus("sending");
    try {
      await base44.entities.ContactMessage.create({
        name,
        email,
        subject: form.subject.trim(),
        message,
      });
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      toast({ title: "Message sent — thank you!", description: "Lissette will get back to you soon." });
      setTimeout(() => setStatus("idle"), 2500);
    } catch {
      setStatus("idle");
      toast({ title: "Something went wrong. Please try again." });
    }
  };

  const inputCls =
    "w-full rounded-xl bg-cream/[0.05] px-4 py-3 text-cream placeholder:text-cream/40 outline-none ring-1 ring-transparent transition focus:bg-cream/[0.08] focus:ring-gold/50";

  return (
    <section id="contact" className="scroll-mt-24">
      <SectionTitle>Contact</SectionTitle>
      <p className="max-w-md leading-relaxed text-cream/70">
        Actively seeking entry-level cybersecurity and QA engineering roles.
        If you think we'd work well together, say hello.
      </p>

      <div className="mt-6 space-y-2 text-sm text-cream/70">
        <a href="mailto:Lissette.deleon@my.utsa.edu" className="flex items-center gap-3 transition-colors hover:text-gold">
          <Mail className="h-4 w-4 text-gold" /> Lissette.deleon@my.utsa.edu
        </a>
        <a href="tel:+18327957552" className="flex items-center gap-3 transition-colors hover:text-gold">
          <Phone className="h-4 w-4 text-gold" /> (832) 795-7552
        </a>
        <p className="flex items-center gap-3">
          <MapPin className="h-4 w-4 text-gold" /> San Antonio, TX
        </p>
      </div>

      <form onSubmit={submit} className="mt-8 space-y-3">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <input value={form.name} onChange={update("name")} placeholder="Your name" className={inputCls} />
          <input value={form.email} onChange={update("email")} type="email" placeholder="Email" className={inputCls} />
        </div>
        <input value={form.subject} onChange={update("subject")} placeholder="Subject" className={inputCls} />
        <textarea value={form.message} onChange={update("message")} placeholder="Message" rows={5}
          className={`${inputCls} resize-none`} />
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-semibold text-noir transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === "sending" ? (<><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>)
            : status === "sent" ? (<><Check className="h-4 w-4" /> Sent</>)
            : "Send message"}
        </button>
      </form>
    </section>
  );
}
