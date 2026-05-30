import { experiences } from "../data/portfolio";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Internships" title="Selected internship and research experience.">
      <div className="space-y-4 lg:space-y-5">
        {experiences.map((experience) => (
          <article className="timeline-card" key={`${experience.title}-${experience.organization}`}>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="card-title">
                  {experience.title}
                </h3>
                <p className="card-subtitle">{experience.organization}</p>
              </div>
              <p className="text-sm font-medium text-slate-500">{experience.dates}</p>
            </div>
            <div className="card-tags">
              {experience.stack.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <ul className="card-body card-list">
              {experience.bullets.map((bullet) => (
                <li className="bullet" key={bullet}>
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
