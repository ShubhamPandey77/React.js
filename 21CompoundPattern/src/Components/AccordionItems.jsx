import { useContext } from "react";
import { AccordionContext } from "./Accordionlist";

export default function AccordionItems({ index, title, children }) {
  const { openIndex, toggleAccordion } = useContext(AccordionContext);

  const isOpen = openIndex === index;

  return (
    <div className="accordion-item">
      {/* Title */}
      <h2
        className="accordion-item-title"
        onClick={() => toggleAccordion(index)}
      >
        {title}
      </h2>

      {/* Content */}
      <div className={`accordion-item-content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
}
