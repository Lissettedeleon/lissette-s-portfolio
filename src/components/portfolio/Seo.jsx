import { useEffect } from "react";

const DEFAULT_TITLE = "Lissette De Leon | Portfolio";
const DEFAULT_DESCRIPTION =
  "Portfolio of Lissette De Leon, a Computer Science graduate with projects in application testing, QA, cloud storage, API integration, and security assessment.";

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  const previous = el.getAttribute("content");
  el.setAttribute("content", content);
  return () => el.setAttribute("content", previous ?? "");
}

// Page level title and description for project pages
export default function Seo({ title, description }) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;
    const restores = [
      setMeta("name", "description", description),
      setMeta("property", "og:title", title),
      setMeta("property", "og:description", description),
    ];
    return () => {
      document.title = previousTitle || DEFAULT_TITLE;
      restores.forEach((restore) => restore());
    };
  }, [title, description]);

  return null;
}

export { DEFAULT_TITLE, DEFAULT_DESCRIPTION };