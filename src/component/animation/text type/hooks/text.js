import { useEffect, useRef, useState } from "react";

export const useText = (textType = "Log In", typingSpeed = 250, pauseTime = 1000) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const count = useRef(0);
  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(() => {
      setText(prev => {
        const full = textType;
        let updated;

        if (!isDeleting) {
          updated = full.slice(0, count.current + 1);
          count.current++;
          if (updated === full) {
            clearInterval(interval.current);
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          updated = full.slice(0, count.current - 1);
          count.current--;
          if (updated === '') {
            clearInterval(interval.current);
            setTimeout(() => setIsDeleting(false), pauseTime);
          }
        }

        return updated;
      });
    }, typingSpeed);

    return () => clearInterval(interval.current);
  }, [isDeleting, textType, typingSpeed, pauseTime]);

  return { text };
};
