import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds, options = { threshold: 0.6 }) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]); // default to first section

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting);

      if (visible.length > 0) {
        // Pick the one with the most visibility
        const mostVisible = visible.reduce((prev, curr) =>
          prev.intersectionRatio > curr.intersectionRatio ? prev : curr
        );
        setActiveSection(mostVisible.target.id);
      }
    }, options);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, options]);

  return activeSection;
}
