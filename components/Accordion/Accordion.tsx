import { useState } from "react";

import AccordionStyles from "./Accordion.module.css";

interface AccordionProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
  summary: string;
  tag: string;
}

export const Accordion = ({
  children,
  summary,
  tag,
  defaultOpen = true,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  const triggerId = `${tag}-trigger`;
  const contentId = `${tag}-content`;

  return (
    <>
      <button
        type="button"
        className={`plain ${AccordionStyles.trigger} ${
          isOpen ? "" : AccordionStyles.closed
        }`}
        onClick={onToggle}
        id={triggerId}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <h3 className={AccordionStyles.summary}>
          {summary}{" "}
          <small className="hidden">
            (Click to {isOpen ? "hide" : "show"} content)
          </small>
        </h3>
      </button>
      <div
        className={AccordionStyles.content}
        id={contentId}
        aria-labelledby={triggerId}
        aria-hidden={!isOpen}
        role="region"
        hidden={!isOpen}
      >
        {children}
      </div>
    </>
  );
};
