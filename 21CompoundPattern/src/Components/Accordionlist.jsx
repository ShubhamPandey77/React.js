import { createContext, useState } from "react";

const AccordionContext = createContext();

export default function Accordionlist({ children, className }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <AccordionContext.Provider value={{ openIndex, toggleAccordion }}>
      <section className={className}>{children}</section>
    </AccordionContext.Provider>
  );
}

export { AccordionContext };
