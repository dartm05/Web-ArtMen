import ReactCardFlip from "react-card-flip";
import { useState } from "react";

export const Flipcard = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className="container-img" onPointerEnter={handleClick}>
        <img src={props.imgsrc} height="380px" alt="front" />
      </div>
      <div onPointerOut={handleClick}>
        <div className="container-flipcard">
          <div className="container-description">
            {props.description
              ? props.description.map((desc, index) => (
                  <p key={index}>{desc}</p>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </ReactCardFlip>
  );
};
