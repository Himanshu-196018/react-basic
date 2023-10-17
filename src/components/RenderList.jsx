import React from "react";

const RenderList = ({ item }) => {
  return (
    <li
      key={item.id}
      style={{
        color: item.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {item.title}
    </li>
  );
};

export default RenderList;
