
import { useEffect, useState, useRef } from 'react';
import "./card.css";
import debounce from 'lodash/debounce';

export default function useOnScreen(options) {
  const ref = useRef();
  const [isIntersecting, setIntersecting] = useState(false);

  // Debounce để giảm tốc độ trigger khi cuộn
  const debouncedSetIntersecting = useRef(
    debounce((value) => setIntersecting(value), 200) // Delay 200ms
  ).current;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      debouncedSetIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isIntersecting];
}



function LazyCard({ children }) {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2, rootMargin: "0px 0px -100px 0px" });

    return (
        <div
            ref={ref}
            className={`card ${isVisible ? 'fade-in' : 'fade-out'}`}
        >
            {children}
        </div>
    );
}

export { LazyCard };
