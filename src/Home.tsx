import React from "react";
import Carousel from "react-material-ui-carousel";

export default function Home() {
  function DataIQ() {
    var items = [
      {
        name: "Sales portal details  #1",
        description: "Probably the most random thing you have ever seen!",
        image: (
          <img
            width="75%"
            height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Overall%20Sales.png"
          />
        ),
      },
      {
        name: "Sales portal details #2",
        description: "Probably the most random thing you have ever seen!",
        image: (
          <img
            width="75%"
            height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Overall%20Sales.png"
          />
        ),
      },
      {
        name: "Sales portal details #3",
        description: "Probably the most random thing you have ever seen!",
        image: (
          <img
            width="75%"
            height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Overall%20Sales.png"
          />
        ),
      },
    ];

    return (
      <Carousel>
        {items.map((item, i) => (
          <div style={{ textAlign: "center" }}>{item.image}</div>
        ))}
      </Carousel>
    );
  }

  return (
    <>
      <DataIQ />
    </>
  );
}
