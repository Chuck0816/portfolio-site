import { projects } from "../data/portfolio";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Project work with practical outcomes.">
      <div className="grid gap-5 lg:gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div>
              <h3 className="card-title">{project.name}</h3>
              <p className="card-body card-description">{project.description}</p>
            </div>
            <div className="card-block">
              <p className="card-kicker mb-3">Key features</p>
              <ul className="card-body grid gap-2">
                {project.features.map((feature) => (
                  <li className="bullet" key={feature}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-tags">
              {project.stack.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <div className="card-actions">
              <a className="text-link" href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="text-link" href={project.demo} target="_blank" rel="noreferrer">
                Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
