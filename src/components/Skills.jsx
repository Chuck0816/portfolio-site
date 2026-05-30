import { skillGroups } from "../data/portfolio";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Technical Toolkit">
      <div className="toolkit-panel">
        {skillGroups.map((group) => (
          <article className="skill-row" key={group.label}>
            <h3>{group.label}</h3>
            <p>{group.skills.join(", ")}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
