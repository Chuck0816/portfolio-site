import { coursework } from "../data/portfolio";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="University of Illinois Urbana-Champaign">
      <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h3 className="text-2xl font-semibold text-slate-950">CS + Statistics</h3>
          <p className="mt-2 text-slate-600">Bachelor of Science, GPA 3.95</p>
          <p className="mt-1 text-slate-600">Minor in Data Science</p>
          <p className="mt-1 text-slate-600">Expected Graduation: May 2028</p>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Relevant Coursework
          </p>
          <div className="flex flex-wrap gap-2">
            {coursework.map((course) => (
              <span className="tag" key={course}>
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
