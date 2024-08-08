import { Link } from "react-router-dom";

export const Features = (props) => {
  return (
    <div id="procedures" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Our Catalogue</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-xs-12 col-md-4"
                  id="procedure-detail-container"
                >
                  {" "}
                  <figure className="figure">
                    <img src={d.img} alt="..." className="team-img" />
                  </figure>
                  <h3 className="title-procedure">{d.title}</h3>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
