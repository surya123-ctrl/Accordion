import React, { useState } from "react";
import { questions } from "./api";
import MyAccordion from "./MyAccordion";
const Accordion = () => {
  const [data, setData] = useState(questions);
  return (
    <>
      <section className="main-div">
        <h1>React Interview Questions</h1>
        {data.map((curr) => {
          const { id } = curr;
          return <MyAccordion key={id} {...curr} />;
        })}
      </section>
    </>
  );
};
export default Accordion;
