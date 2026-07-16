import React from "react";
import SectionTitle from "./SectionTitle";
import { Status } from "./case/CaseKit";

const SCHOOLS = [
  {
    degree: "B.S. Computer Science",
    school: "University of Texas at San Antonio",
    note: "GPA 3.55",
  },
  {
    degree: "Cyber Defense Program",
    school: "Northeast Lakeview College",
    note: null,
    progress: true,
  },
];

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24">
      <SectionTitle kicker="Background">Education</SectionTitle>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {SCHOOLS.map((s) => (
          <div key={s.degree} className="rounded-2xl border border-cream/10 bg-cream/[0.03] p-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-semibold text-cream">{s.degree}</h3>
              {s.progress && <Status kind="In Progress" />}
            </div>
            <p className="mt-1 text-sm text-cream/65">{s.school}</p>
            {s.note && <p className="mt-1 font-mono text-xs text-gold">{s.note}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
