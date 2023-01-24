import React, { useState } from "react";

const MyAccordion = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="main-heading">
        <p onClick={() => setShow(!show)}>{show ? "➖" : "➕"}</p>
        <h1>{question}</h1>
      </div>
      {show && <p className="answers">{answer}</p>}
    </>
  );
};
export default MyAccordion;
