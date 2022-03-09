import { useSessionStorage } from 'lib/useStorage';
import type { MouseEvent } from 'react';

type ClickEvent = MouseEvent<HTMLButtonElement, globalThis.MouseEvent>;

export default function UkraineBanner() {
  const [isOpen, setIsOpen] = useSessionStorage('ukr', true);

  if (!isOpen) return null;

  const handleClose = (e: ClickEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://gyanprakashraj.github.io/RoBoGx/"
    >
      <div className="bg-[#0066cc] text-white fixed flex items-center justify-center bottom-0 w-screen h-12 z-50">
        <button className="fixed right-0 h-12 w-12 hover" onClick={handleClose}>
          x
        </button>
        <span className="block md:hidden">
          <strong className="text-[#ffcc00]">Wanna see my first Portfolio?</strong> Visit
          →
        </span>
        <span className="hidden md:block">
          <strong className="text-[#ffcc00]">Stand with Ukraine.</strong>{' '}
          हम दुनिया में इतने गुलाब लगा देंगे की सेनाओं  को खड़े होने के लिए भी जगह नहीं बचेगी।.
        </span>
      </div>
    </a>
  );
}
