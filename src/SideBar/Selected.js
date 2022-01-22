import React from "react";
import Example from "./Example";
import './Example.scss'


function Selected({ active, setSelected, title }) {
  return (
    <div>
      <button
        className={active ? "Example active" : "Example"}
        onClick={() => setSelected(title)}
      >
        {title}
      </button>
    </div>
  );
}

export default Selected;
