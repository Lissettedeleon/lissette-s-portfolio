import React from "react";
import SectionTitle from "./SectionTitle";

const HOBBIES = [
  { photo: "/hobby_pickleball.jpg", name: "Pickleball" },
  { photo: "/hobby_hiking.jpg", name: "Hiking" },
  { photo: "/hobby_dogs.jpg", name: "Dog Lover" },
  { photo: "/hobby_adventure.jpg", name: "Adventurous" },
];

export default function Hobbies() {
  return (
    <section className="scroll-mt-24">
      <SectionTitle>Off the Clock</SectionTitle>
      <p className="mb-8 leading-relaxed text-cream/70">
        Because the best technologists have a life outside the terminal —
        pickleball, hiking trails, my dogs, and an unreasonable talent for
        couponing.
      </p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {HOBBIES.map((h) => (
          <figure key={h.name} className="group">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={h.photo}
                alt={h.name}
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <figcaption className="mt-2 text-center font-mono text-xs uppercase tracking-wide text-cream/55">
              {h.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
