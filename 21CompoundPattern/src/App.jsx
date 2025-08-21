import Accordionlist from "./Components/Accordionlist";
import AccordionItems from "./Components/AccordionItems";

function App() {
  return (
    <main>
      <Accordionlist className="accordion">
        <AccordionItems index={0} title="Vacation 1">
          <p>Vietnam?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            pariatur accusantium eos sequi non alias inventore ducimus.
          </p>
        </AccordionItems>

        <AccordionItems index={1} title="Vacation 2">
          <p>Australia?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            pariatur accusantium eos sequi non alias inventore ducimus.
          </p>
        </AccordionItems>
      </Accordionlist>
    </main>
  );
}

export default App;
