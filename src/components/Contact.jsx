import { profile } from "../data/portfolio";
import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let us connect.">
      <div className="rounded-[2rem] border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-orange-50 p-6 text-slate-950 shadow-xl shadow-slate-200/70 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <h3 className="text-3xl font-semibold tracking-tight">Open to SWE, Data Science, and ML roles.</h3>
            <p className="mt-4 max-w-2xl leading-7 text-slate-700">
              I am happy to talk about internship opportunities, full-time paths, research projects,
              or technical collaborations.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a className="button primary" href={`mailto:${profile.email}`}>
              Email
            </a>
            <a className="button soft" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="button soft" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="button soft" href={profile.resume} download>
              Resume
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
