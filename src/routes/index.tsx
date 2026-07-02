import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import CountUp from "react-countup";
import {
  ArrowRight,
  Award,
  Bath,
  BedDouble,
  Building2,
  CheckCircle2,
  ChevronDown,
  Compass,
  FileCheck2,
  FileText,
  Hammer,
  HardHat,
  Home,
  Key,
  Landmark,
  MapPin,
  Maximize,
  Phone,
  ScrollText,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

import hero from "@/assets/hero-villa.jpg";
import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import p4 from "@/assets/property-4.jpg";
import p5 from "@/assets/property-5.jpg";
import p6 from "@/assets/property-6.jpg";
import familyKeys from "@/assets/family-keys.jpg";
import construction from "@/assets/construction.jpg";
import ctaVilla from "@/assets/cta-villa.jpg";
import whyImg from "@/assets/why-choose.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: "https://project--f37d24be-c214-4cb9-b179-8cf10b29e8e1.lovable.app/og.jpg" },
    ],
  }),
  component: IndexPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28 ${className}`}>{children}</section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
      <span className="h-1.5 w-1.5 rounded-full bg-brand" /> {children}
    </span>
  );
}

function IndexPage() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Properties />
        <WhyChoose />
        <Construction />
        <Documentation />
        <About />
        <Process />
        <Stats />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

/* ------------------------------ HERO ------------------------------ */
function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10">
        <img src={hero} alt="Luxury Indian villa" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/30 to-transparent" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-14 px-5 pt-10 pb-24 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:px-8 lg:pt-16">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <Eyebrow>Premium Real Estate · Tamil Nadu</Eyebrow>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] text-charcoal sm:text-6xl lg:text-7xl">
            Find Your Dream Property with{" "}
            <span className="text-brand italic">Confidence</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Trusted experts in buying, selling, construction, documentation, and civil engineering consultation — delivering luxury homes with complete legal clarity.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#properties" className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-[0_15px_40px_-15px_rgba(178,34,34,0.7)] transition-all hover:bg-brand-hover hover:shadow-[0_20px_50px_-15px_rgba(139,0,0,0.7)]">
              Explore Properties <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 bg-white/70 px-6 py-3.5 text-sm font-semibold text-charcoal backdrop-blur transition-colors hover:border-charcoal/40">
              Contact Us
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand" /> Verified Listings</div>
            <div className="flex items-center gap-2"><FileCheck2 className="h-4 w-4 text-brand" /> Legal Documentation</div>
            <div className="flex items-center gap-2"><Award className="h-4 w-4 text-brand" /> 10+ Years Trust</div>
          </div>
        </motion.div>

        {/* Floating stats grid */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Users, value: "500+", label: "Happy Clients" },
            { icon: Home, value: "300+", label: "Properties Sold" },
            { icon: Award, value: "10+", label: "Years Experience" },
            { icon: ShieldCheck, value: "100%", label: "Legal Documentation" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-hairline bg-white/80 p-5 backdrop-blur-xl shadow-[0_20px_60px_-25px_rgba(0,0,0,0.18)]"
            >
              <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="font-display text-3xl font-bold text-charcoal">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand/5 transition-transform group-hover:scale-125" />
            </motion.div>
          ))}
        </div>
      </div>

      <a href="#services" aria-label="Scroll" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-charcoal/50 animate-bounce">
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  );
}

/* ------------------------------ SERVICES ------------------------------ */
const services = [
  { icon: Home, title: "Home Buying", desc: "Curated homes to match your lifestyle and budget." },
  { icon: Key, title: "Home Selling", desc: "Reach genuine buyers and close at the right price." },
  { icon: ScrollText, title: "Documentation", desc: "End-to-end legal paperwork handled by experts." },
  { icon: Hammer, title: "Concrete Construction", desc: "Quality builds engineered for generations." },
  { icon: HardHat, title: "Civil Consultation", desc: "Expert engineering guidance for every project." },
  { icon: MapPin, title: "Land & Plot Sales", desc: "Prime plots with clear titles and pattas." },
  { icon: Building2, title: "Commercial Properties", desc: "Retail, office and mixed-use investments." },
  { icon: Compass, title: "Property Valuation", desc: "Accurate market pricing you can trust." },
];

function Services() {
  return (
    <Section id="services">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>What We Do</Eyebrow>
        <h2 className="mt-4 font-display text-4xl font-bold text-charcoal sm:text-5xl text-balance">
          Comprehensive real estate services under one trusted roof
        </h2>
        <p className="mt-4 text-muted-foreground">
          From your first site visit to key handover — we take care of every detail with clarity and care.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ show: { transition: { staggerChildren: 0.06 } } }}
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {services.map((s) => (
          <motion.div
            key={s.title}
            variants={fadeUp}
            className="group relative overflow-hidden rounded-3xl border border-hairline bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-[0_30px_60px_-25px_rgba(178,34,34,0.25)]"
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold text-charcoal">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            <ArrowRight className="absolute right-6 top-6 h-4 w-4 -translate-x-2 text-brand opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

/* ------------------------------ PROPERTIES ------------------------------ */
const properties = [
  { img: p1, name: "Palm Grove Villa", location: "Coimbatore", price: "₹2.4 Cr", beds: 4, baths: 5, area: "3,800 sqft", badge: "Featured" },
  { img: p2, name: "Airaa Skyline Residences", location: "Kinathukadavu", price: "₹85 L", beds: 3, baths: 2, area: "1,650 sqft", badge: "New" },
  { img: p3, name: "Green Court House", location: "Pollachi", price: "₹1.15 Cr", beds: 3, baths: 3, area: "2,200 sqft", badge: "Ready" },
  { img: p4, name: "Sunrise DTCP Plots", location: "Kinathukadavu", price: "₹18 L / plot", beds: 0, baths: 0, area: "1,200 sqft", badge: "Plot" },
  { img: p5, name: "Airaa Gated Community", location: "Coimbatore", price: "₹1.9 Cr", beds: 4, baths: 4, area: "3,200 sqft", badge: "Gated" },
  { img: p6, name: "Trade Tower Commercial", location: "Coimbatore", price: "₹4.8 Cr", beds: 0, baths: 4, area: "6,500 sqft", badge: "Commercial" },
];

function Properties() {
  return (
    <Section id="properties" className="!py-24">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <Eyebrow>Featured Listings</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold text-charcoal sm:text-5xl">
            Handpicked properties, ready for the perfect owner
          </h2>
        </div>
        <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-hover">
          Request full catalog <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="group overflow-hidden rounded-3xl border border-hairline bg-white shadow-[0_10px_40px_-24px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-25px_rgba(0,0,0,0.25)]"
          >
            <div className="relative overflow-hidden">
              <img src={p.img} alt={p.name} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand backdrop-blur">
                {p.badge}
              </span>
              <span className="absolute right-4 top-4 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                {p.price}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" /> {p.location}
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold text-charcoal">{p.name}</h3>
              <div className="mt-5 flex items-center gap-5 border-t border-hairline pt-4 text-sm text-muted-foreground">
                {p.beds > 0 && <span className="flex items-center gap-1.5"><BedDouble className="h-4 w-4 text-brand" /> {p.beds}</span>}
                {p.baths > 0 && <span className="flex items-center gap-1.5"><Bath className="h-4 w-4 text-brand" /> {p.baths}</span>}
                <span className="flex items-center gap-1.5"><Maximize className="h-4 w-4 text-brand" /> {p.area}</span>
              </div>
              <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-charcoal/10 py-2.5 text-sm font-semibold text-charcoal transition-colors hover:border-brand hover:text-brand">
                View Details <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------ WHY CHOOSE ------------------------------ */
const whyPoints = [
  "Verified Properties",
  "Transparent Pricing",
  "Legal Documentation Support",
  "Professional Guidance",
  "Civil Engineering Experts",
  "Quality Construction",
  "Customer First Approach",
  "Trusted Local Experts",
];

function WhyChoose() {
  return (
    <div id="why" className="bg-soft">
      <Section className="!py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.25)]">
              <img src={whyImg} alt="Modern Indian home" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden max-w-[240px] rounded-2xl border border-hairline bg-white p-5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)] sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-white"><Sparkles className="h-5 w-5" /></div>
                <div>
                  <div className="font-display text-lg font-bold text-charcoal">Top 1%</div>
                  <div className="text-xs text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <Eyebrow>Why Airaa</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold text-charcoal sm:text-5xl text-balance">
              A partnership built on trust, transparency and craft
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              For over a decade, families and investors have chosen Airaa for property decisions that hold their value — legally, financially, and emotionally.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {whyPoints.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="flex items-center gap-3 rounded-2xl border border-hairline bg-white px-4 py-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-brand" />
                  <span className="text-sm font-medium text-charcoal">{point}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}

/* ------------------------------ CONSTRUCTION ------------------------------ */
const constructionServices = [
  "Residential Construction",
  "Concrete Structure",
  "Site Supervision",
  "Planning & Design",
  "Execution",
  "Quality Assurance",
  "Engineering Consultancy",
];

function Construction() {
  return (
    <Section id="construction">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <Eyebrow>Construction</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold text-charcoal sm:text-5xl text-balance">
            Building quality homes that last generations
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Certified civil engineers and skilled contractors delivering resilient concrete structures with disciplined execution and strict quality control.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {constructionServices.map((s) => (
              <li key={s} className="flex items-center gap-3 text-sm text-charcoal">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-brand/10 text-brand"><CheckCircle2 className="h-4 w-4" /></span>
                {s}
              </li>
            ))}
          </ul>

          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-black">
            Get Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.25)]"
        >
          <img src={construction} alt="Construction site" loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 p-4 backdrop-blur">
            <div className="flex items-center gap-3">
              <HardHat className="h-6 w-6 text-brand" />
              <div>
                <div className="text-sm font-semibold text-charcoal">150+ Projects Delivered</div>
                <div className="text-xs text-muted-foreground">On time, on budget, on quality</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ------------------------------ DOCUMENTATION ------------------------------ */
const docs = [
  { icon: FileText, title: "Sale Agreement" },
  { icon: Landmark, title: "Patta Assistance" },
  { icon: Search, title: "EC Verification" },
  { icon: ScrollText, title: "Registration Guidance" },
  { icon: ShieldCheck, title: "Legal Verification" },
  { icon: Key, title: "Property Transfer" },
  { icon: FileCheck2, title: "Documentation Support" },
];

function Documentation() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white via-soft to-white">
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Legal & Documentation</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold text-charcoal sm:text-5xl text-balance">
            Complete legal clarity, from paperwork to handover
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every deal we close is backed by verified documents and clean titles — you sign only when everything is right.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {docs.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group rounded-3xl border border-white bg-white/60 p-6 backdrop-blur-xl shadow-[0_20px_50px_-25px_rgba(0,0,0,0.15)] transition-all hover:-translate-y-1 hover:bg-white"
            >
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <d.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-charcoal">{d.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">Verified · Compliant · Transparent</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}

/* ------------------------------ ABOUT ------------------------------ */
function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.25)]">
          <img src={familyKeys} alt="Family receiving keys" loading="lazy" className="h-full w-full object-cover" />
        </motion.div>

        <div>
          <Eyebrow>About Airaa</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold text-charcoal sm:text-5xl text-balance">
            Helping families find homes they'll love for a lifetime
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Airaa Real Estate is dedicated to helping families and investors find the perfect property while ensuring complete transparency, trusted guidance, quality construction, and professional engineering consultation.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Our mission is simple — deliver reliable real estate services with integrity, professionalism, and genuine customer satisfaction.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-hairline pt-6">
            {[
              { k: "10+", v: "Years" },
              { k: "500+", v: "Families" },
              { k: "150+", v: "Projects" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl font-bold text-brand">{s.k}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------ PROCESS ------------------------------ */
const steps = [
  { n: "01", title: "Consultation", desc: "Understand your goals, budget, and preferences." },
  { n: "02", title: "Property Selection", desc: "Curated shortlist of verified properties." },
  { n: "03", title: "Site Visit", desc: "Guided walkthroughs at your convenience." },
  { n: "04", title: "Documentation", desc: "Legal checks, EC, patta, and agreements." },
  { n: "05", title: "Registration", desc: "Smooth government registration process." },
  { n: "06", title: "Handover", desc: "Keys, warranties, and continued support." },
];

function Process() {
  return (
    <div className="bg-soft">
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>How We Work</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold text-charcoal sm:text-5xl">
            A calm, six-step journey to your new address
          </h2>
        </div>

        <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="relative rounded-3xl border border-hairline bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-25px_rgba(0,0,0,0.18)]"
            >
              <div className="font-display text-5xl font-bold text-brand/15">{s.n}</div>
              <h3 className="mt-3 font-display text-xl font-semibold text-charcoal">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}

/* ------------------------------ STATS ------------------------------ */
function StatCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <span ref={ref} className="font-display text-5xl font-bold text-charcoal sm:text-6xl">
      {inView ? <CountUp end={end} duration={2.2} separator="," /> : 0}
      {suffix}
    </span>
  );
}

function Stats() {
  const items = [
    { end: 500, suffix: "+", label: "Satisfied Clients" },
    { end: 300, suffix: "+", label: "Properties Sold" },
    { end: 150, suffix: "+", label: "Construction Projects" },
    { end: 100, suffix: "%", label: "Legal Support" },
  ];
  return (
    <Section>
      <div className="rounded-[2.5rem] border border-hairline bg-white p-10 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)] lg:p-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s) => (
            <div key={s.label} className="text-center">
              <StatCounter end={s.end} suffix={s.suffix} />
              <div className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------ TESTIMONIALS ------------------------------ */
const testimonials = [
  { name: "Ramesh Kumar", role: "Homeowner, Coimbatore", quote: "Airaa made buying our first home effortless. Every document was handled and every question answered. Truly professional." },
  { name: "Divya Priya", role: "Investor, Pollachi", quote: "The team helped me acquire two plots with clear titles. Their EC and patta verification saved me from a bad deal." },
  { name: "Vignesh S.", role: "Villa Owner, Kinathukadavu", quote: "They built our home end-to-end. Quality of concrete, finishing, and site supervision was outstanding." },
  { name: "Meena Lakshmi", role: "Seller, Coimbatore", quote: "Sold my property in 6 weeks at a great price. Transparent commissions and constant updates throughout." },
];

function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  return (
    <div id="testimonials" className="bg-soft">
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Client Stories</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold text-charcoal sm:text-5xl">
            Trusted by families across Tamil Nadu
          </h2>
        </div>

        <motion.div key={t.name} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mx-auto mt-12 max-w-3xl rounded-[2rem] border border-hairline bg-white p-8 text-center shadow-[0_30px_70px_-35px_rgba(0,0,0,0.2)] sm:p-12">
          <div className="flex justify-center gap-1 text-brand">
            {[...Array(5)].map((_, k) => <Star key={k} className="h-5 w-5 fill-current" />)}
          </div>
          <p className="mt-6 font-display text-xl leading-relaxed text-charcoal sm:text-2xl">"{t.quote}"</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-brand text-lg font-semibold text-white">{t.name[0]}</div>
            <div className="text-left">
              <div className="font-semibold text-charcoal">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Testimonial ${k + 1}`}
              className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-brand" : "w-2 bg-charcoal/20 hover:bg-charcoal/40"}`}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}

/* ------------------------------ FAQ ------------------------------ */
const faqs = [
  { q: "How do I buy a property with Airaa?", a: "Share your requirements — budget, location, and property type. We'll shortlist verified options, arrange site visits, handle documentation, and guide you through registration." },
  { q: "Do you provide legal documentation support?", a: "Yes. We handle sale agreements, EC and patta verification, registration guidance, and property transfers with certified legal professionals." },
  { q: "Do you offer construction services?", a: "We provide end-to-end residential construction, concrete structures, site supervision, and civil engineering consultation." },
  { q: "Can you help sell my property?", a: "Absolutely. We evaluate market value, market your property professionally, and connect you to genuine, verified buyers." },
  { q: "Do you provide civil engineering consultation?", a: "Yes. Our qualified engineers offer planning, structural design, execution guidance, and quality assurance for all projects." },
  { q: "Are site visits available?", a: "Yes. We schedule guided visits at your convenience — including weekends — with transparent information and no obligation." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold text-charcoal sm:text-5xl text-balance">
            Answers to what most clients ask
          </h2>
          <p className="mt-4 text-muted-foreground">
            Still have questions? Our team is one call away.
          </p>
          <a href="tel:+919788121526" className="mt-6 inline-flex items-center gap-2 rounded-full border border-charcoal/15 px-5 py-3 text-sm font-semibold text-charcoal hover:border-brand hover:text-brand">
            <Phone className="h-4 w-4" /> 97881 21526
          </a>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`rounded-2xl border transition-colors ${isOpen ? "border-brand/40 bg-white shadow-[0_20px_50px_-30px_rgba(178,34,34,0.4)]" : "border-hairline bg-white"}`}>
                <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className="font-medium text-charcoal">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-brand transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid overflow-hidden transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="min-h-0">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------ CTA ------------------------------ */
function CTA() {
  return (
    <Section className="!py-24">
      <div className="relative overflow-hidden rounded-[2.5rem] shadow-[0_40px_100px_-40px_rgba(0,0,0,0.4)]">
        <img src={ctaVilla} alt="Luxury villa" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/60 to-charcoal/20" />
        <div className="relative grid gap-8 px-8 py-16 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:px-16 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-white" /> Take the next step
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              Ready to buy or sell your dream property?
            </h2>
            <p className="mt-4 max-w-lg text-white/80">
              Talk to our advisors today — no obligation, just clear guidance and honest options.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a href="tel:+919788121526" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 text-sm font-semibold text-white shadow-[0_20px_50px_-15px_rgba(178,34,34,0.8)] hover:bg-brand-hover">
              <Phone className="h-4 w-4" /> Call 97881 21526
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-charcoal hover:bg-white/90">
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
