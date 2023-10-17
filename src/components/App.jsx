import React, { useState } from "react";
import Button from "./Button";
import DemoProfile from "./DemoProfile";
import RenderList from "./RenderList";

const App = () => {
  // variable used
  const name = "Himanshu";
  const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];

  //   state
  const [display, setDisplay] = useState(false);
  const [count, setCount] = useState(0);

  //   functions
  const handleShow = () => {
    setDisplay((prev) => !prev);
  };

  const handleClick = () => {
    setCount(count + 1);
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

      <h2>Rendering Lists</h2>
      <ul>
        {products.map((item) => {
          return <RenderList item={item} />;
        })}
      </ul>

      <h2>Responding to Events</h2>
      <Button text={"Click me"} click={() => alert("You clicked me")} />

      <h2>Updating the screen, Using Hooks, Sharing Data</h2>
      <Button text={`Clicked ${count} times`} click={handleClick} />
    </>
  );
};

export default App;
