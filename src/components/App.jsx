import React, { useState } from "react";
import Button from "./Button";
import DemoProfile from "./DemoProfile";

const App = () => {
  // variable used
  const name = "Himanshu";

  //   state
  const [display, setDisplay] = useState(false);

  //   functions
  const handleShow = () => {
    setDisplay((prev) => !prev);
  };

  return (
    <>
      <h2>Creating and Nesting Components</h2>
      <Button />
      <h2>Writing Markups with JSX</h2>
      <p>Actually using JSX to write this</p>

      <h2>Adding Styles</h2>
      <p>
        Specify Class with <span className="keywords">className</span>{" "}
        attribute. It is same as HTML
        <span className="keywords">class</span> attribute.
      </p>
      <p>
        Adding style to React components depends on build tool or framework used
        within. (CRA is used to make this app).
      </p>

      <h2>Displaying Data</h2>
      <p>Can put markup into JS. Curly braces lets "escape back" into JS</p>
      <p>
        <strong>{name}</strong> is stored in "name" variable.
      </p>
      <DemoProfile />

      <h2>Conditional Rendering</h2>
      <Button text={"Show/Hide"} click={handleShow} />
      {display && <p>I will hide</p>}
    </>
  );
};

export default App;
