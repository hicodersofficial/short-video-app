import React, { useRef } from "react";
import Short from "./Short";
import data from "../data/data.json";

function ShortContainer() {
  const shortContainerRef = useRef();

  return (
    <>
      <section ref={shortContainerRef} className="short-container">
        {data.map((short) => (
          <Short
            key={short.id}
            shortContainerRef={shortContainerRef}
            short={short}
          />
        ))}
      </section>

      <div className="navigation-container">
        <div
          onClick={() => {
            shortContainerRef.current.scrollTo(
              0,
              shortContainerRef.current.scrollTop - window.innerHeight
            );
          }}
          className="nav-up"
        >
          <ion-icon name="arrow-up-outline"></ion-icon>
        </div>
        <div
          onClick={() => {
            shortContainerRef.current.scrollTo(
              0,
              shortContainerRef.current.scrollTop + window.innerHeight
            );
          }}
          className="nav-down"
        >
          <ion-icon name="arrow-down-outline"></ion-icon>
        </div>
      </div>
    </>
  );
}

export default ShortContainer;
