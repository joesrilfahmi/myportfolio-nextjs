import { useEffect, useState } from "react";

interface TypewriterOptions {
  typeSpeed?: number;
  deleteSpeed?: number;
  /** How long a finished word stays on screen. */
  pause?: number;
  /** Set to false to stop the animation (e.g. reduced motion). */
  enabled?: boolean;
}

/** Types each word, holds it, deletes it, then moves on to the next. */
export function useTypewriter(
  words: readonly string[],
  {
    typeSpeed = 65,
    deleteSpeed = 35,
    pause = 1800,
    enabled = true,
  }: TypewriterOptions = {},
) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (!enabled || words.length === 0) return;

    let wordIndex = 0;
    let length = 0;
    let deleting = false;
    let timer: number;

    const tick = () => {
      const word = words[wordIndex];
      length += deleting ? -1 : 1;
      setText(word.slice(0, length));

      let delay = deleting ? deleteSpeed : typeSpeed;
      if (!deleting && length === word.length) {
        deleting = true;
        delay = pause;
      } else if (deleting && length === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
      timer = window.setTimeout(tick, delay);
    };

    timer = window.setTimeout(tick, typeSpeed);
    return () => window.clearTimeout(timer);
  }, [words, enabled, typeSpeed, deleteSpeed, pause]);

  return text;
}
