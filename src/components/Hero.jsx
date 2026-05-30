import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="hero-shell relative overflow-hidden px-4 pb-14 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
      <div className="hero-glow hero-glow-a" />
      <div className="hero-glow hero-glow-b" />
      <div className="hero-glow hero-glow-c" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.38fr] lg:items-center">
        <div className="animate-in max-w-5xl">
          <p className="eyebrow hero-eyebrow">Backend Engineering / AI Agents / Data Analysis</p>
          <h1 className="mt-5 max-w-5xl text-6xl font-semibold leading-[0.96] tracking-tight text-slate-950 sm:text-8xl lg:text-[8rem]">
            {profile.name}
          </h1>
          <p className="mt-7 max-w-5xl text-[1.28rem] leading-8 text-slate-700 sm:text-[1.55rem] sm:leading-9">
            {profile.intro}
          </p>

          <div className="mt-7 flex flex-wrap gap-3 text-sm font-medium">
            <span className="pill strong">UIUC CS + Statistics</span>
            <span className="pill">Minor in Data Science</span>
            <span className="pill">GPA 3.95</span>
            <span className="pill">{profile.focus}</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="button primary" href="#projects">
              View Projects
            </a>
            <a className="button secondary" href={profile.resume} download>
              Download Resume
            </a>
            <a className="button ghost" href="#contact">
              Contact Me
            </a>
          </div>
        </div>

        <div className="animate-in-delay mx-auto w-full max-w-xs sm:max-w-sm lg:mx-0">
          <div className="portrait-frame">
            <img src={profile.photo} alt="Chuck Wang headshot" className="portrait-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
