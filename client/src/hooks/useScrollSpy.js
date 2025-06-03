import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

export default function useScrollSpy(ids, offset = 0) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const handleScroll = debounce(() => {
      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - offset <= 0) {
          current = id;
        }
      }

      setActive(current);
    }, 100); // Adjust debounce delay as needed

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel(); // Cleanup debounce
    };
  }, [ids, offset]);

  return active;
}
