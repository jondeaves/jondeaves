import { useState } from "react";
import AccordionStyles from "./Accordion.module.css";

type AccordionProps = {
  children: React.ReactNode;
  summary: string;
  tag?: string;
};

const Accordion = ({ children, summary, tag }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? "" : AccordionStyles.closed}>
      <button className="plain" onClick={onToggle} id={tag}>
        <h3 className={AccordionStyles.summary}>
          {summary}{" "}
          <small className="hidden">
            (Click to {isOpen ? "hide" : "show"} content)
          </small>
        </h3>
      </button>
      <div className={AccordionStyles.content}>{children}</div>
    </div>
  );
};

export default Accordion;
