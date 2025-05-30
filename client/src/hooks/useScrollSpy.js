import { useEffect, useState } from 'react';

export default function useScrollSpy(ids, offset = 0) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const handler = () => {
      let current = ids[0];
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - offset <= 0) {
          current = id;
        }
      });
      setActive(current);
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, [ids, offset]);
  return active;
}
