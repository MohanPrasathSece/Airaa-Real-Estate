import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Airaa Real Estate" },
      { name: "description", content: "Reach Airaa Real Estate in Kinathukadavu, Tamil Nadu. Call 97881 21526 for buying, selling, construction, or documentation." },
      { property: "og:title", content: "Contact Airaa Real Estate" },
      { property: "og:description", content: "Get in touch with our trusted property, construction and documentation team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-white">
      <Header />
      <main className="pt-32">
        <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" /> Get in touch
            </span>
            <h1 className="mt-5 font-display text-5xl font-bold text-charcoal sm:text-6xl">Let's find your next address</h1>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Whether you're buying, selling, or building — our team is ready to help. Send a message and we'll get back within one business day.
            </p>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
            {/* Form */}
            <div className="rounded-[2rem] border border-hairline bg-white p-8 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.2)] sm:p-10">
              {submitted ? (
                <div className="grid h-full min-h-[400px] place-items-center text-center">
                  <div>
                    <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-brand/10 text-brand"><Send className="h-6 w-6" /></div>
                    <h3 className="font-display text-2xl font-bold text-charcoal">Thank you!</h3>
                    <p className="mt-2 text-muted-foreground">We've received your message and will call you shortly.</p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="grid gap-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full Name" name="name" placeholder="Your name" required />
                    <Field label="Phone Number" name="phone" placeholder="97881 21526" type="tel" required />
                  </div>
                  <Field label="Email" name="email" placeholder="you@example.com" type="email" />
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-charcoal">Service Required</label>
                    <select className="w-full rounded-2xl border border-hairline bg-white px-4 py-3.5 text-sm text-charcoal outline-none transition-colors focus:border-brand">
                      <option>Home Buying</option>
                      <option>Home Selling</option>
                      <option>Land / Plot</option>
                      <option>Construction</option>
                      <option>Civil Consultation</option>
                      <option>Documentation</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-charcoal">Message</label>
                    <textarea rows={4} placeholder="Tell us about your requirement..." className="w-full resize-none rounded-2xl border border-hairline bg-white px-4 py-3.5 text-sm text-charcoal outline-none transition-colors focus:border-brand" />
                  </div>
                  <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-hover">
                    Send Message <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col gap-6">
              <InfoCard icon={<MapPin className="h-5 w-5" />} title="Visit Us">
                Sivan Kovil Street, Beside Sivan Kovil,<br />
                Kinathukadavu, Tamil Nadu — 652109
              </InfoCard>
              <InfoCard icon={<Phone className="h-5 w-5" />} title="Call Us">
                <a href="tel:+919788121526" className="text-brand font-semibold">97881 21526</a>
              </InfoCard>
              <InfoCard icon={<Mail className="h-5 w-5" />} title="Email">
                <a href="mailto:hello@airaarealestate.com" className="hover:text-brand">hello@airaarealestate.com</a>
              </InfoCard>
              <InfoCard icon={<Clock className="h-5 w-5" />} title="Business Hours">
                Mon – Sat · 9:00 AM – 7:00 PM<br />Sunday · By appointment
              </InfoCard>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-hairline shadow-[0_30px_70px_-40px_rgba(0,0,0,0.2)]">
            <iframe
              title="Airaa Real Estate location"
              src="https://maps.google.com/maps?q=Kinathukadavu%20Tamil%20Nadu&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              className="border-0"
            />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-charcoal">{label}</label>
      <input {...props} className="w-full rounded-2xl border border-hairline bg-white px-4 py-3.5 text-sm text-charcoal outline-none transition-colors focus:border-brand" />
    </div>
  );
}

function InfoCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-hairline bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.2)]">
      <div className="flex items-start gap-4">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand/10 text-brand">{icon}</div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</div>
          <div className="mt-1 text-sm text-charcoal">{children}</div>
        </div>
      </div>
    </div>
  );
}